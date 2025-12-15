import { Args } from "grimoire-kolmafia";
import {
  $slots,
  Session,
  setDefaultMaximizeOptions,
  sinceKolmafiaRevision,
  withProperty,
} from "libram";

import { CrimboEngine } from "./engine";
import { args, printh } from "./lib";
import Tasks from "./tasks";

export function main(command?: string) {
  Args.fill(args, command);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  setDefaultMaximizeOptions({ preventSlot: $slots`crown-of-thrones, buddy-bjorn` });

  sinceKolmafiaRevision(28799); // First zone of the season added

  const engine = new CrimboEngine(Tasks);
  engine.print();

  const sessionStart = Session.current();

  withProperty("recoveryScript", "", () => {
    try {
      engine.run();
    } finally {
      engine.destruct();
    }
  });

  const sessionResults = Session.current().diff(sessionStart);

  printh(`SESSION RESULTS:`);
  for (const [item, count] of sessionResults.items.entries()) {
    printh(`ITEM ${item} QTY ${count}`);
  }
}
