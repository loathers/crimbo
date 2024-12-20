import { $effect, $item, $skill, AprilingBandHelmet, AsdonMartin, CinchoDeMayo, get, getBanishedMonsters, have } from "libram";
import { CrimboStrategy, CrimboTask } from "../engine";
import { getIsland, getIslands } from "../lib";
import { cliExecute, inebrietyLimit, myInebriety, use, useSkill } from "kolmafia";
import Macro from "../macro";
import { Quest } from "grimoire-kolmafia";

export const ISLAND_QUEST: Quest<CrimboTask> = {
  name: "Island Adventuring",
  tasks: [
  {
    name: "Forced Noncombat",
    completed: () => !get("noncombatForcerActive"),
    do: () => getIslands()[0].location,
    sobriety: "either",
    outfit: () => ({ modifier: `${getIslands()[0].element} Resistance`, ...(myInebriety() > inebrietyLimit() ? { offhand: $item`Drunkula's wineglass` } : {})})
  },
  // Timer Free Kills
  {
    name: "Jurassic Parka (Island)",
    completed: () => have($effect`Everything Looks Yellow`),
    ready: () => have($item`Jurassic Parka`)  && have($skill`Torso Awareness`),
    do: () => getIsland().location,
    outfit: () => islandOutfit("freekill", { shirt: $item`Jurassic Parka`}),
    combat: new CrimboStrategy(() => Macro.islandKillWith($skill`Spit jurassic acid`)),
    sobriety: "sober"
  },
  // Darts, Pig Skinner skill, etc
  // Timer Free Runs
  {
    name: "Asdon Bumper",
    ready: () => AsdonMartin.installed(),
    completed: () => getBanishedMonsters().has($skill`Asdon Martin: Spring-Loaded Front Bumper`),
    do: () => getIsland().location,
    outfit: () => islandOutfit("freerun"),
    combat: new CrimboStrategy(() => Macro.islandRunWith($skill`Asdon Martin: Spring-Loaded Front Bumper`)),
    sobriety: "sober"
  },
  {
    name: "Spring Shoes",
    ready: () => have($item`spring shoes`),
    completed: () => have($effect`Everything Looks Green`),
    do: () => getIsland().location,
    outfit: () => islandOutfit("freerun"),
    combat: new CrimboStrategy(() => Macro.islandRunWith($skill`Spring Away`)),
    sobriety: "sober"
  },
  // NC Forcers
  {
    name: "Clara's Bell",
    completed: () => get("_claraBellUsed"),
    ready: () => have($item`Clara's bell`),
    do: () => use($item`Clara's bell`),
    sobriety: "either"
  },
  {
    name: "Pillkeeper",
    completed: () => get("_freePillKeeperUsed"),
    ready: () => have($item`Eight Days a Week Pill Keeper`),
    do: () => cliExecute("pillkeeper noncombat"),
    sobriety: "either"
  },
  {
    name: "Fiesta Exit",
    completed: () => CinchoDeMayo.currentCinch() < 60,
    ready: () => CinchoDeMayo.have(),
    do: () => useSkill($skill`Cincho: Fiesta Exit`),sobriety: "either"
  },
  {
    name: "Apriling Tuba",
    completed: () => !AprilingBandHelmet.canPlay("Apriling band tuba"),
    do: () => AprilingBandHelmet.play("Apriling band tuba"),
    sobriety: "either",
  },
  // Free Kills
  // Timer Free Kills
  // Regular Fight
]
}
