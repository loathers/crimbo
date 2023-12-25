/* eslint-disable libram/verify-constants */
import { Args } from "grimoire-kolmafia";
import {
  descToItem,
  haveEquipped,
  inebrietyLimit,
  isDarkMode,
  Item,
  Location,
  Monster,
  myAdventures,
  myFamiliar,
  myInebriety,
  print,
  runChoice,
  visitUrl,
} from "kolmafia";
import {
  $familiar,
  $item,
  $location,
  $monster,
  Counter,
  CrystalBall,
  flat,
  get,
  have,
  SourceTerminal,
} from "libram";

import * as OrbManager from "./orbmanager";

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
  return myInebriety() <= inebrietyLimit() + (myFamiliar() === $familiar`Stooper` ? -1 : 0);
}

const neutralMonsters = {
  recruit: $monster`Crimbuccaneer new recruit`,
  privateer: $monster`Crimbuccaneer privateer`,
  dropout: $monster`Crimbuccaneer military school dropout`,
  conscript: $monster`Elf Guard conscript`,
  convict: $monster`Elf Guard convict`,
  private: $monster`Elf Guard private`,
} as const;

const affiliatedZoneMonsters = {
  armory: {
    none: neutralMonsters,
    pirates: {
      seal: $monster`Elf Guard arctic seal`,
      armorer: $monster`Elf Guard armorer`,
      beret: $monster`Elf Guard Red and White Beret`,
    },
    elves: {
      carpenter: $monster`Crimbuccaneer carpenter`,
      freebooter: $monster`Crimbuccaneer freebooter`,
      scrimshander: $monster`Crimbuccaneer scrimshander`,
    },
  },
  bar: {
    none: neutralMonsters,
    pirates: {
      specialist: $monster`Elf Guard shore leave specialist`,
      chemist: $monster`Elf Guard Chemist`,
      sanitation: $monster`Elf Guard sanitation officer`,
    },
    elves: {
      barrrback: $monster`Crimbuccaneer barrrback`,
      grognard: $monster`Crimbuccaneer grognard`,
      brawler: $monster`Crimbuccaneer bar brawler`,
    },
  },
  cafe: {
    none: neutralMonsters,
    pirates: {
      desserter: $monster`Elf Guard desserter`,
      provisioner: $monster`Elf Guard provisioner`,
      steward: $monster`Elf Guard steward`,
    },
    elves: {
      plunderer: $monster`Crimbuccaneer fruit plunderer`,
      retiree: $monster`Crimbuccaneer retiree`,
      whalehunter: $monster`Crimbuccaneer whalehunter`,
    },
  },
  cottage: {
    none: neutralMonsters,
    pirates: {
      requisitions: $monster`Elf Guard requisitions officer`,
      strategist: $monster`Elf Guard Strategist`,
      general: $monster`Elf Guard general`,
    },
    elves: {
      mudlark: $monster`Crimbuccaneer mudlark`,
      navigator: $monster`Crimbuccaneer navigator`,
      captain: $monster`Crimbuccaneer vice-captain`,
    },
  },
  foundry: {
    none: neutralMonsters,
    pirates: {
      courier: $monster`Elf Guard fuel courier`,
      engineer: $monster`Elf Guard Engineer`,
      packer: $monster`Elf Guard ordnance packer`,
    },
    elves: {
      rigger: $monster`Crimbuccaneer Rigging Rigger`,
      lamplighter: $monster`Crimbuccaneer Lamplighter`,
      bombjack: $monster`Crimbuccaneer bombjack`,
    },
  },
} as const;

export const args = Args.create("crimbo23", "A script for farming elf stuff", {
  turns: Args.number({
    help: "The number of turns to run (use negative numbers for the number of turns remaining)",
    default: Infinity,
  }),
  zone: Args.string({
    options: [
      ["armory", "Armory"],
      ["bar", "The Bar"],
      ["cafe", "Cafe"],
      ["cottage", "Abuela's Cottage"],
      ["foundry", "Pirate Foundry"],
    ],
    default: "cottage",
  }),
  affiliation: Args.string({
    options: [
      ["none", "Do not pick a side"],
      ["elves", "Fight for the elves"],
      ["pirates", "Fight for the Crimbuccaneers"],
    ],
    help: "The side to fight for.",
    default: "elves",
  }),
  shrub: Args.boolean({
    help: "Whether to use the Crimbo Shrub when farming Crimbo zones.",
    default: false,
  }),
  debug: Args.flag({
    help: "Turn on debug printing",
    default: false,
  }),
  orb: Args.string({
    options: [
      ...Object.entries(
        Object.assign({}, ...flat(Object.values(affiliatedZoneMonsters).map(Object.values)))
      ).map(([key, val]) => [key, `${val}`] as [string, string]),
      ["none", "Don't use it"],
    ],
    help: "Monster to target with the orb.",
    default: "none",
  }),
  sniff: Args.string({
    options: [
      ...Object.entries(
        Object.assign({}, ...flat(Object.values(affiliatedZoneMonsters).map(Object.values)))
      ).map(([key, val]) => [key, `${val}`] as [string, string]),
      ["none", "Don't use it"],
    ],
    help: "Monster to sniff with a prank Crimbo card or trick coin (does not autobuy)",
    default: "none",
  }),
});

export function chosenAffiliation(): "none" | "elves" | "pirates" {
  switch (args.affiliation) {
    case "none":
      return "none";
    case "elves":
      return "elves";
    case "pirates":
      return "pirates";
    default:
      throw `Unknown affiliation ${args.affiliation}`;
  }
}

let orbTarget: Monster | null = null;
export function validateAndSetOrbTarget(target: string, zone: string, affiliation: string) {
  if (target === "none") return;
  if (!have($item`miniature crystal ball`)) return;
  if (!(zone in affiliatedZoneMonsters)) throw new Error("Invalid zone specified");
  const affiliatedMonsters = affiliatedZoneMonsters[zone as keyof typeof affiliatedZoneMonsters];
  if (!(affiliation in affiliatedMonsters)) throw new Error("Invalid affiliation specified");
  const monsters = affiliatedMonsters[affiliation as keyof typeof affiliatedMonsters];
  if (!(target in monsters)) throw new Error("Invalid target specified");
  orbTarget = monsters[target as keyof typeof monsters];
}
export function getOrbTarget(): Monster | null {
  return orbTarget;
}

let sniffTarget: Monster | null = null;
export function validateAndSetSniffTarget(target: string, zone: string, affiliation: string) {
  if (target === "none") return;
  if (!(zone in affiliatedZoneMonsters)) throw new Error("Invalid zone specified");
  const affiliatedMonsters = affiliatedZoneMonsters[zone as keyof typeof affiliatedZoneMonsters];
  if (!(affiliation in affiliatedMonsters)) throw new Error("Invalid affiliation specified");
  const monsters = affiliatedMonsters[affiliation as keyof typeof affiliatedMonsters];
  if (!(target in monsters)) throw new Error("Invalid target specified");
  sniffTarget = monsters[target as keyof typeof monsters];
}
export function getSniffTarget(): Monster | null {
  return sniffTarget;
}

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

export type RealmType = "spooky" | "stench" | "hot" | "cold" | "sleaze" | "fantasy" | "pirate";
export function realmAvailable(identifier: RealmType): boolean {
  if (identifier === "fantasy") {
    return get(`_frToday`) || get(`frAlways`);
  } else if (identifier === "pirate") {
    return get(`_prToday`) || get(`prAlways`);
  }
  return get(`_${identifier}AirportToday`, false) || get(`${identifier}AirportAlways`, false);
}

export const unsupportedChoices = new Map<Location, { [choice: number]: number | string }>([
  [$location`The Spooky Forest`, { [502]: 2, [505]: 2 }],
  [$location`Guano Junction`, { [1427]: 1 }],
  [$location`The Hidden Apartment Building`, { [780]: 6, [1578]: 6 }],
  [$location`The Black Forest`, { [923]: 1, [924]: 1 }],
  [$location`LavaCo™ Lamp Factory`, { [1091]: 9 }],
  [$location`The Haunted Laboratory`, { [884]: 6 }],
  [$location`The Haunted Nursery`, { [885]: 6 }],
  [$location`The Haunted Storage Room`, { [886]: 6 }],
  [$location`The Hidden Park`, { [789]: 6 }],
  [$location`A Mob of Zeppelin Protesters`, { [1432]: 1, [857]: 2 }],
  [$location`A-Boo Peak`, { [1430]: 2 }],
  [$location`Sloppy Seconds Diner`, { [919]: 6 }],
  [$location`VYKEA`, { [1115]: 6 }],
  [
    $location`The Castle in the Clouds in the Sky (Basement)`,
    {
      [670]: 4,
      [671]: 4,
      [672]: 1,
    },
  ],
  [
    $location`The Haunted Bedroom`,
    {
      [876]: 1, // old leather wallet, 500 meat
      [877]: 1, // old coin purse, 500 meat
      [878]: 1, // 400-600 meat
      [879]: 2, // grouchy spirit
      [880]: 2, // a dumb 75 meat club
    },
  ],
  [$location`The Copperhead Club`, { [855]: 4 }],
  [$location`The Castle in the Clouds in the Sky (Top Floor)`, { [1431]: 1, [677]: 2 }],
  [$location`The Hidden Office Building`, { [786]: 6 }],
]);

function untangleDigitizes(turnCount: number, chunks: number): number {
  const turnsPerChunk = turnCount / chunks;
  const monstersPerChunk = Math.sqrt((turnsPerChunk + 3) / 5 + 1 / 4) - 1 / 2;
  return Math.round(chunks * monstersPerChunk);
}

/**
 *
 * @returns The number of digitized monsters that we expect to fight today
 */
export function digitizedMonstersRemaining(): number {
  if (!SourceTerminal.have()) return 0;

  const digitizesLeft = SourceTerminal.getDigitizeUsesRemaining();
  if (digitizesLeft === SourceTerminal.getMaximumDigitizeUses()) {
    return untangleDigitizes(myAdventures(), SourceTerminal.getMaximumDigitizeUses());
  }

  const monsterCount = SourceTerminal.getDigitizeMonsterCount() + 1;

  const turnsLeftAtNextMonster = myAdventures() - Counter.get("Digitize Monster");
  if (turnsLeftAtNextMonster <= 0) return 0;
  const turnsAtLastDigitize = turnsLeftAtNextMonster + ((monsterCount + 1) * monsterCount * 5 - 3);
  return (
    untangleDigitizes(turnsAtLastDigitize, digitizesLeft + 1) -
    SourceTerminal.getDigitizeMonsterCount()
  );
}

export function shrineGazeIfNecessary(): void {
  if (getOrbTarget() && !haveEquipped(CrystalBall.orb)) OrbManager.shrineGaze();
}
