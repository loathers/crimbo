import {
  canAdventure,
  Location,
  Monster,
  runChoice,
  toUrl,
  visitUrl,
} from "kolmafia";
import { $location, CrystalBall } from "libram";

let currentPonder = CrystalBall.ponder();
let ponderIsValid = true;

function updatePonder(): void {
  currentPonder = CrystalBall.ponder();
  ponderIsValid = true;
}
export function ponder(): Map<Location, Monster> {
  if (!ponderIsValid) updatePonder();
  return currentPonder;
}

export function invalidate(): void {
  ponderIsValid = false;
}

export function shrineGaze(): void {
  if (get("hiddenBowlingAlleyProgress") !== 8) return;

  const shrine = $location`An Overgrown Shrine (Southeast)`;

  if (!canAdventure(shrine)) return;

  try {
    const encounter = visitUrl(toUrl(shrine));
    if (!encounter.includes("Fire When Ready")) {
      print("Unable to stare longingly at a shrine ball cradle");
    }
    // Walk away
    runChoice(6);
  } catch (e) {
    print(
      `We ran into an issue when gazing at a shrine for balls: ${e}.`,
      "red"
    );
  }
}
