import { WandererManager } from "garbo-lib";
import { Location, getMonsters, myAdventures } from "kolmafia";
import { get, notNull } from "libram";

import { args, digitizedMonstersRemaining } from "./lib";
import { garboValue } from "./value";

let _wanderer: WandererManager;
export function wanderer(): WandererManager {
  return (_wanderer ??= new WandererManager({
    ascend: args.ascend,
    estimatedTurns: myAdventures,
    itemValue: garboValue,
    // TODO: value NC and Res
    effectValue: () => 0,
    prioritizeCappingGuzzlr: false,
    freeFightExtraValue: () => 0,
    digitzesRemaining: digitizedMonstersRemaining,
    plentifulMonsters: [
      get("_sourceTerminalDigitizeMonster"),
      ...getMonsters(Location.get("Smoldering Bone Spikes")),
    ].filter(notNull),
  }));
}
