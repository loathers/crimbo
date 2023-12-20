import { toSkill } from "kolmafia";
import { $effects, $location, have } from "libram";

import { CrimboQuest, CrimboStrategy } from "../engine";
import { toasterGazeIfNecessary } from "../lib";
import Macro from "../macro";
import { affiliationSpec, chooseQuestOutfit, drunkSpec, orbSpec } from "../outfit";

// eslint-disable-next-line libram/verify-constants
const location = $location`The Armory Up In Arms`;
const armory: CrimboQuest = {
  name: "Armory",
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
        $effects`Blood Bond, Empathy, Leash of Linguini`.filter((effect) => have(toSkill(effect))),
      combat: new CrimboStrategy(() => Macro.standardCombat()),
      sobriety: "either",
      post: toasterGazeIfNecessary,
    },
  ],
};

export default armory;
