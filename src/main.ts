import { Args } from "grimoire-kolmafia";
import { myAdventures } from "kolmafia";
import {
  $slots,
  Session,
  setDefaultMaximizeOptions,
  sinceKolmafiaRevision,
} from "libram";

import { defaultEffects, prebuff } from "./effects";
import { CrimboEngine } from "./engine";
import { args, printh } from "./lib";
import Tasks from "./tasks";

export function main(command?: string) {
  Args.fill(args, command);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  setDefaultMaximizeOptions({
    preventSlot: $slots`crown-of-thrones, buddy-bjorn`,
  });

  sinceKolmafiaRevision(28818); // Shanties

  const targetTurns =
    args.turns > 0 && args.turns !== Infinity
      ? args.turns
      : // Add args.turns to adventures in case it's a negative input, harmless if it's 0
        // Multiply by 1.3 as a generous estimate of turngen from things like gnome and mafia ring
        Math.ceil((myAdventures() + (args.turns < 0 ? args.turns : 0)) * 1.3);
  prebuff(targetTurns);
  const engine = new CrimboEngine(Tasks, {
    default_task_options: { effects: defaultEffects() },
  });
  engine.print();

  const sessionStart = Session.current();

  try {
    engine.run();
  } finally {
    engine.destruct();
  }

  const sessionResults = Session.current().diff(sessionStart);

  printh(`SESSION RESULTS:`);
  for (const [item, count] of sessionResults.items.entries()) {
    printh(`ITEM ${item} QTY ${count}`);
  }
}
