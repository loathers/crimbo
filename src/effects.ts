import { Effect } from "kolmafia";
import { $effect, $item, $skill, have } from "libram";

interface OptionalEffect {
  effect: Effect;
  condition: () => boolean;
}

const defaultOptionalEffects: OptionalEffect[] = [
  {
    effect: $effect`Empathy`,
    condition: () => have($skill`Empathy of the Newt`),
  },
  {
    effect: $effect`Thoughtful Empathy`,
    condition: () =>
      have($item`April Shower Thoughts shield`) &&
      have($skill`Empathy of the Newt`),
  },
  {
    effect: $effect`Leash of Linguini`,
    condition: () => have($skill`Leash of Linguini`),
  },
  { effect: $effect`Blood Bond`, condition: () => have($skill`Blood Bond`) },
  {
    effect: $effect`Blood Bubble`,
    condition: () => have($skill`Blood Bubble`),
  },
  {
    effect: $effect`Elemental Saucesphere`,
    condition: () => have($skill`Elemental Saucesphere`),
  },
  {
    effect: $effect`Astral Shell`,
    condition: () => have($skill`Astral Shell`),
  },
];

export function defaultEffects(): Effect[] {
  return defaultOptionalEffects
    .filter((optionalEffect) => optionalEffect.condition())
    .map((optionalEffect) => optionalEffect.effect);
}
