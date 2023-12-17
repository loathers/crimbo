import { toSkill } from "kolmafia";
import { $effects, $location, have } from "libram";

import { CrimboQuest, CrimboStrategy } from "../engine";
import { toasterGazeIfNecessary } from "../lib";
import Macro from "../macro";
import { chooseQuestOutfit, drunkSpec, orbSpec } from "../outfit";

// eslint-disable-next-line libram/verify-constants
const location = $location`Abuela's Cottage (Contested)`;
const cottage: CrimboQuest = {
  name: "Cottage",
  location,
  tasks: [
    {
      name: "Crimbo",
      completed: () => false,
      do: location,
      outfit: () => chooseQuestOutfit({ location, isFree: false }, drunkSpec, orbSpec(location)),
      effects: () =>
        $effects`Blood Bond, Empathy, Leash of Linguini`.filter((effect) => have(toSkill(effect))),
      combat: new CrimboStrategy(() => Macro.standardCombat()),
      sobriety: "either",
      post: toasterGazeIfNecessary,
    },
  ],
};

export default cottage;
