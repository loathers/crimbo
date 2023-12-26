import { equip, toSkill, useSkill } from "kolmafia";
import { $effect, $effects, $item, $location, $skill, $slot, have } from "libram";

import { CrimboQuest, CrimboStrategy } from "../engine";
import { shrineGazeIfNecessary } from "../lib";
import Macro from "../macro";
import { affiliationSpec, chooseQuestOutfit, drunkSpec, orbSpec } from "../outfit";

// eslint-disable-next-line libram/verify-constants
const location = $location`The Bar at War`;
const bar: CrimboQuest = {
  name: "Bar",
  location,
  tasks: [
    {
      name: "Scariersauce",
      ready: () => have($item`velour viscometer`),
      completed: () => have($effect`Scariersauce`),
      outfit: { acc1: $item`velour viscometer` },
      do: () => {
        useSkill($skill`Scarysauce`);
        equip($slot`acc1`, $item`none`);
      },
      sobriety: "either",
    },
    {
      name: "Crimbo",
      completed: () => false,
      do: location,
      outfit: () =>
        chooseQuestOutfit(
          { location, isFree: false },
          drunkSpec,
          affiliationSpec(),
          orbSpec(location)
        ),
      effects: () =>
        $effects`Blood Bond, Empathy, Leash of Linguini, Elemental Saucesphere, Scarysauce, Astral Shell`.filter(
          (effect) => have(toSkill(effect))
        ),
      combat: new CrimboStrategy(() => Macro.standardCombat()),
      sobriety: "either",
      post: shrineGazeIfNecessary,
    },
  ],
};

export default bar;
