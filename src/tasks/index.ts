import { getTasks } from "grimoire-kolmafia";
import { SETUP_QUEST } from "./setup";
import { myAdventures, myTurncount } from "kolmafia";
import { args } from "../lib";
import { GLOBAL_QUEST } from "./global";
import { ISLAND_QUEST } from "./island";

  const turncount = myTurncount();
  const completed =
    args.turns > 0
      ? () => myTurncount() - turncount >= args.turns || myAdventures() === 0
      : () => myAdventures() === -args.turns;

export default getTasks([SETUP_QUEST, { ...GLOBAL_QUEST, completed }, {...ISLAND_QUEST, completed}])
