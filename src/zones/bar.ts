import { toSkill } from "kolmafia";
import { $effects, $location, have } from "libram";

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
        $effects`Blood Bond, Empathy, Leash of Linguini, Elemental Saucesphere, Scarysauce, Astral Shell, Feeling Peaceful`.filter(
          (effect) => have(toSkill(effect))
        ),
      combat: new CrimboStrategy(() => Macro.standardCombat()),
      sobriety: "either",
      post: shrineGazeIfNecessary,
    },
  ],
};

export default bar;
