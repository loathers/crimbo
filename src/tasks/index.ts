import { args } from "../lib";
import { getTasks } from "grimoire-kolmafia";
import { myAdventures, myTurncount } from "kolmafia";

import { GLOBAL_QUEST } from "./global";
import { ISLAND_QUEST } from "./island";
import { SETUP_QUEST } from "./setup";

const turncount = myTurncount();
const completed = () =>
  args.turns > 0
    ? myTurncount() - turncount >= args.turns || myAdventures() === 0
    : myAdventures() <= -args.turns;

export default getTasks([
  SETUP_QUEST,
  { ...GLOBAL_QUEST, completed },
  { ...ISLAND_QUEST, completed },
]);
