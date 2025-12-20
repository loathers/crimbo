import { Effect, Skill, cliExecute, haveEffect, turnsPerCast } from "kolmafia";
import { $effect, $item, $skill, have } from "libram";

interface OptionalEffect {
  effect: Effect;
  skill: Skill;
  condition?: () => boolean;
}

const defaultOptionalEffects: OptionalEffect[] = [
  {
    effect: $effect`Empathy`,
    skill: $skill`Empathy of the Newt`,
  },
  {
    effect: $effect`Thoughtful Empathy`,
    skill: $skill`Empathy of the Newt`,
    condition: () => have($item`April Shower Thoughts shield`),
  },
  {
    effect: $effect`Leash of Linguini`,
    skill: $skill`Leash of Linguini`,
  },
  { effect: $effect`Blood Bond`, skill: $skill`Blood Bond` },
  {
    effect: $effect`Elemental Saucesphere`,
    skill: $skill`Elemental Saucesphere`,
  },
  {
    effect: $effect`Astral Shell`,
    skill: $skill`Astral Shell`,
  },
  {
    effect: $effect`Only Dogs Love a Drunken Sailor`,
    skill: $skill`Only Dogs Love a Drunken Sailor`,
  },
];

export function validDefaultEffects(): OptionalEffect[] {
  return defaultOptionalEffects.filter(
    (optionalEffect) =>
      have(optionalEffect.skill) && (optionalEffect.condition?.() ?? true),
  );
}

export function defaultEffects(): Effect[] {
  return validDefaultEffects().map((optionalEffect) => optionalEffect.effect);
}

export function prebuff(turns: number): void {
  for (const ef of validDefaultEffects()) {
    const casts = Math.ceil(
      (turns - haveEffect(ef.effect)) / turnsPerCast(ef.skill),
    );
    if (casts > 0) {
      // this should automatically handle maintaining hp/mp
      cliExecute(`cast ${casts} ${ef.skill} ^ ${ef.effect}`);
    }
  }
}
