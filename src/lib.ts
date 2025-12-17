import { Args } from "grimoire-kolmafia";
import {
  Item,
  canEquip,
  descToItem,
  inebrietyLimit,
  isDarkMode,
  myAdventures,
  myFamiliar,
  myInebriety,
  myPrimestat,
  myTurncount,
  print,
  runChoice,
  visitUrl,
} from "kolmafia";
import {
  $familiar,
  $item,
  $location,
  $stat,
  Counter,
  SourceTerminal,
  get,
  have,
} from "libram";

export function shouldRedigitize(): boolean {
  const digitizesLeft = SourceTerminal.getDigitizeUsesRemaining();
  const monsterCount = SourceTerminal.getDigitizeMonsterCount() + 1;
  // triangular number * 10 - 3
  const digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  // Redigitize if fewer adventures than this digitize usage.
  return (
    SourceTerminal.have() &&
    SourceTerminal.canDigitize() &&
    myAdventures() / 0.96 < digitizesLeft * digitizeAdventuresUsed
  );
}

const HIGHLIGHT = isDarkMode() ? "yellow" : "blue";
export function printh(message: string) {
  print(message, HIGHLIGHT);
}

export function printd(message: string) {
  if (args.debug) {
    print(message, HIGHLIGHT);
  }
}

export function sober() {
  return (
    myInebriety() <=
    inebrietyLimit() + (myFamiliar() === $familiar`Stooper` ? -1 : 0)
  );
}

export const args = Args.create(
  "crimbo25",
  "A script for farming skeleton stuff",
  {
    ascend: Args.flag({
      help: "Whether you plan to ascend right after this",
      default: false,
    }),
    turns: Args.number({
      help: "The number of turns to run (use negative numbers for the number of turns remaining)",
      default: Infinity,
    }),
    location: Args.location({
      help: "The location to adventure in.",
      default: $location`Smoldering Fingerbones`,
    }),
    shrub: Args.boolean({
      help: "Whether to use the Crimbo Shrub when farming Crimbo zones.",
      default: false,
    }),
    debug: Args.flag({
      help: "Turn on debug printing",
      default: false,
    }),
  },
);

function getCMCChoices(): { [choice: string]: number } {
  const options = visitUrl("campground.php?action=workshed");
  let i = 0;
  let match;
  const entries: [string, number][] = [];

  const regexp = /descitem\((\d+)\)/g;
  while ((match = regexp.exec(options)) !== null) {
    entries.push([`${descToItem(match[1])}`, ++i]);
  }
  return Object.fromEntries(entries);
}

export function tryGetCMCItem(item: Item): void {
  const choice = getCMCChoices()[`${item}`];
  if (choice) {
    runChoice(choice);
  }
}

export type CMCEnvironment = "u" | "i";
export function countEnvironment(environment: CMCEnvironment): number {
  return get("lastCombatEnvironments")
    .split("")
    .filter((e) => e === environment).length;
}

export type RealmType =
  | "spooky"
  | "stench"
  | "hot"
  | "cold"
  | "sleaze"
  | "fantasy"
  | "pirate";
export function realmAvailable(identifier: RealmType): boolean {
  if (identifier === "fantasy") {
    return get(`_frToday`) || get(`frAlways`);
  } else if (identifier === "pirate") {
    return get(`_prToday`) || get(`prAlways`);
  }
  return (
    get(`_${identifier}AirportToday`, false) ||
    get(`${identifier}AirportAlways`, false)
  );
}

function untangleDigitizes(turnCount: number, chunks: number): number {
  const turnsPerChunk = turnCount / chunks;
  const monstersPerChunk = Math.sqrt((turnsPerChunk + 3) / 5 + 1 / 4) - 1 / 2;
  return Math.round(chunks * monstersPerChunk);
}

/**
 *
 * @returns The number of digitized monsters that we expect to fight today
 */
export function digitizedMonstersRemaining(turns = myTurncount()): number {
  if (!SourceTerminal.have()) return 0;

  const digitizesLeft = SourceTerminal.getDigitizeUsesRemaining();
  if (digitizesLeft === SourceTerminal.getMaximumDigitizeUses()) {
    return untangleDigitizes(turns, SourceTerminal.getMaximumDigitizeUses());
  }

  const monsterCount = SourceTerminal.getDigitizeMonsterCount() + 1;

  const turnsLeftAtNextMonster = turns - Counter.get("Digitize Monster");
  if (turnsLeftAtNextMonster <= 0) return 0;
  const turnsAtLastDigitize =
    turnsLeftAtNextMonster + ((monsterCount + 1) * monsterCount * 5 - 3);
  return (
    untangleDigitizes(turnsAtLastDigitize, digitizesLeft + 1) -
    SourceTerminal.getDigitizeMonsterCount()
  );
}

export const canPickpocket = () =>
  myPrimestat() === $stat`moxie` ||
  [have, canEquip].some((func) => func($item`mime army infiltration glove`));
export const shouldPickpocket = () =>
  myInebriety() <= inebrietyLimit() &&
  canPickpocket() &&
  have($item`deft pirate hook`); // && unlikely to be the guy you can't pickpocket, I guess?

export function getLocation() {
  return args.location;
}
