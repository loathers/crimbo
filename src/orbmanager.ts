import {
  adv1,
  canAdventure,
  equip,
  print,
  runChoice,
  toUrl,
  visitUrl,
} from "kolmafia";
import { $location, CrystalBall, get, withChoices } from "libram";

export function shrineGaze(): void {
  const hiddencity = get("hiddenBowlingAlleyProgress") !== 8;
  const dailyDungeon =
    get("dailyDungeonDone") ||
    ["It's Almost Certainly a Trap", "I Wanna Be a Door"].includes(
      get("_lastDailyDungeonEncounter"),
    );

  if (!hiddencity && !dailyDungeon) return;

  const orbLoc = hiddencity
    ? $location`An Overgrown Shrine (Southeast)`
    : $location`The Daily Dungeon`;

  if (!canAdventure(orbLoc)) return;

  if (hiddencity) {
    try {
      print("Gazing at a shrine to reset the orb prediction");
      equip(CrystalBall.orb);
      const encounter = visitUrl(toUrl(orbLoc));
      if (!encounter.includes("Fire When Ready")) {
        print("Unable to stare longingly at a shrine ball cradle");
      }
      // Walk away
      runChoice(6);
    } catch (e) {
      print(
        `We ran into an issue when gazing at a shrine for balls: ${e}.`,
        "red",
      );
    }
  } else
    try {
      print("Gazing at daily dungeon to reset the orb prediction");
      equip(CrystalBall.orb);
      withChoices({ 692: 8, 693: 3 }, () =>
        adv1($location`The Daily Dungeon`, -1, ""),
      );
    } catch (e) {
      print(
        `We ran into an issue when gazing at a shrine for balls: ${e}.`,
        "red",
      );
    }

  CrystalBall.ponder();
}
