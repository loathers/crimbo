import { CrimboStrategy, CrimboTask } from "../engine";
import Macro from "../macro";
import { wandererOutfit } from "../outfit";
import { wanderer } from "../wanderer";
import { Quest } from "grimoire-kolmafia";
import {
  canAdventure,
  inebrietyLimit,
  myClass,
  myInebriety,
  totalTurnsPlayed,
} from "kolmafia";
import {
  $class,
  $item,
  $items,
  $location,
  $skill,
  Counter,
  get,
  getKramcoWandererChance,
  have,
} from "libram";

let digitizes = get("_sourceTerminalDigitizeMonsterCount");

export const GLOBAL_QUEST: Quest<CrimboTask> = {
  name: "Merry Crimbo!",
  tasks: [
    {
      name: "June Cleaver",
      ready: () =>
        have($item`June cleaver`) && get("_juneCleaverFightsLeft") === 0,
      do:
        myInebriety() <= inebrietyLimit()
          ? $location`Noob Cave`
          : $location`Drunken Stupor`,
      outfit: { weapon: $item`June cleaver` },
      completed: () => get("_juneCleaverFightsLeft") > 0,
      sobriety: "either",
      combat: new CrimboStrategy(() => Macro.abort()),
    },
    {
      name: "Proton Ghost",
      ready: () =>
        have($item`protonic accelerator pack`) &&
        get("questPAGhost") !== "unstarted" &&
        !!get("ghostLocation"),
      do: () => {
        const location = get("ghostLocation");
        if (location) {
          return location;
        } else {
          throw "Could not determine Proton Ghost location!";
        }
      },
      outfit: () =>
        wandererOutfit(
          {
            wandererType: get("ghostLocation") ?? $location.none,
            isFree: true,
          },
          {
            back: $item`protonic accelerator pack`,
            avoid:
              get("ghostLocation") === $location`The Icy Peak`
                ? $items`Great Wolf's beastly trousers`
                : [],
          },
        ),
      completed: () => get("questPAGhost") === "unstarted",
      combat: new CrimboStrategy(() =>
        Macro.trySkill($skill`Sing Along`)
          .trySkill($skill`Shoot Ghost`)
          .trySkill($skill`Shoot Ghost`)
          .trySkill($skill`Shoot Ghost`)
          .trySkill($skill`Trap Ghost`),
      ),
      sobriety: "sober",
    },
    {
      name: "Grey You Attack Skill",
      completed: () =>
        have($skill`Nantlers`) ||
        have($skill`Nanoshock`) ||
        have($skill`Audioclasm`),
      do: $location`The Haunted Storage Room`,
      ready: () =>
        myClass() === $class`Grey Goo` &&
        canAdventure($location`The Haunted Storage Room`),
      combat: new CrimboStrategy(() => Macro.attack().repeat()),
      sobriety: "sober",
    },
    {
      name: "Vote Wanderer",
      ready: () =>
        have($item`"I Voted!" sticker`) &&
        totalTurnsPlayed() % 11 === 1 &&
        get("lastVoteMonsterTurn") < totalTurnsPlayed() &&
        get("_voteFreeFights") < 3,
      do: () => wanderer().getTarget("wanderer").location,
      outfit: () =>
        wandererOutfit(
          { wandererType: "wanderer", isFree: true },
          { acc3: $item`"I Voted!" sticker` },
        ),
      choices: () => wanderer().getChoices("wanderer"),
      completed: () => get("lastVoteMonsterTurn") === totalTurnsPlayed(),
      combat: new CrimboStrategy(() => Macro.redigitize().standardCombat()),
      sobriety: "either",
    },
    {
      name: "Digitize Wanderer",
      ready: () => Counter.get("Digitize") <= 0,
      outfit: () =>
        wandererOutfit({
          wandererType: "wanderer",
          isFree: get("_sourceTerminalDigitizeMonster")?.attributes.includes(
            "FREE",
          ),
        }),
      completed: () => get("_sourceTerminalDigitizeMonsterCount") !== digitizes,
      do: () => wanderer().getTarget("wanderer").location,
      post: () => (digitizes = get("_sourceTerminalDigitizeMonsterCount")),
      choices: () => wanderer().getChoices("wanderer"),
      combat: new CrimboStrategy(() => Macro.redigitize().standardCombat()),
      sobriety: "either",
    },
    {
      name: "Void Monster",
      ready: () =>
        have($item`cursed magnifying glass`) &&
        get("cursedMagnifyingGlassCount") === 13,
      completed: () => get("_voidFreeFights") >= 5,
      outfit: () =>
        wandererOutfit(
          { wandererType: "wanderer", isFree: true },
          { offhand: $item`cursed magnifying glass` },
        ),
      do: () => wanderer().getTarget("wanderer").location,
      choices: () => wanderer().getChoices("wanderer"),
      sobriety: "either",
      combat: new CrimboStrategy(() => Macro.standardCombat()),
    },
    {
      name: "Sausage Goblin",
      ready: () =>
        have($item`Kramco Sausage-o-Matic™`) && getKramcoWandererChance() >= 1,
      completed: () => getKramcoWandererChance() < 1,
      outfit: () =>
        wandererOutfit(
          { wandererType: "wanderer", isFree: true },
          { offhand: $item`Kramco Sausage-o-Matic™` },
        ),
      do: () => wanderer().getTarget("wanderer").location,
      choices: () => wanderer().getChoices("wanderer"),
      sobriety: "either",
      combat: new CrimboStrategy(() => Macro.standardCombat()),
    },
  ],
};
