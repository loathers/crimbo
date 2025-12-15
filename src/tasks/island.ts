import { CrimboStrategy, CrimboTask } from "../engine";
import Macro from "../macro";
import { islandOutfit } from "../outfit";
import { OutfitSpec, Quest } from "grimoire-kolmafia";
import { Item, Location, Skill, mallPrice, myAdventures } from "kolmafia";
import { $effect, $item, $items, $skill, get, have } from "libram";

function getLocation() {
  return Location.get("Smoldering Bone Spikes");
}

function freeKillTask(
  fragment: Omit<CrimboTask, "do" | "sobriety" | "name" | "outfit" | "combat">,
  action: Item | Skill,
  source: OutfitSpec = {},
): CrimboTask {
  return {
    name: `${action}`,
    do: () => getLocation(),
    sobriety: "sober",
    outfit: () => islandOutfit("freekill", source),
    combat: new CrimboStrategy(() => Macro.islandKillWith(action)),
    ...fragment,
  };
}

// function freeRunTask(
//   fragment: Omit<CrimboTask, "do" | "sobriety" | "name" | "outfit" | "combat">,
//   action: Item | Skill,
//   source: OutfitSpec = {},
// ): CrimboTask {
//   return {
//     name: `${action}`,
//     do: () => getLocation(),
//     sobriety: "sober",
//     outfit: () => islandOutfit("freerun", source),
//     combat: new CrimboStrategy(() => Macro.islandRunWith(action)),
//     ...fragment,
//   };
// }

// const NC_FORCERS = [
//       {
//       name: "Clara's Bell",
//       completed: () => get("_claraBellUsed"),
//       ready: () => have($item`Clara's bell`),
//       do: () => use($item`Clara's bell`),
//       sobriety: "either",
//     },
//     {
//       name: "Pillkeeper",
//       completed: () => get("_freePillKeeperUsed"),
//       ready: () => have($item`Eight Days a Week Pill Keeper`),
//       do: () => cliExecute("pillkeeper noncombat"),
//       sobriety: "either",
//     },
//     {
//       name: "Fiesta Exit",
//       completed: () => CinchoDeMayo.currentCinch() < 60,
//       ready: () => CinchoDeMayo.have(),
//       do: () => useSkill($skill`Cincho: Fiesta Exit`),
//       sobriety: "either",
//     },
//     {
//       name: "Apriling Tuba",
//       completed: () => !AprilingBandHelmet.canPlay("Apriling band tuba"),
//       do: () => AprilingBandHelmet.play("Apriling band tuba"),
//       sobriety: "either",
//     },
// ];

export const ISLAND_QUEST: Quest<CrimboTask> = {
  name: "Island Adventuring",
  tasks: [
    // {
    //   name: "Forced Noncombat",
    //   completed: () => !get("noncombatForcerActive"),
    //   do: () => getLocation(),
    //   sobriety: "either",
    //   outfit: () => ({
    //     ...(myInebriety() > inebrietyLimit()
    //       ? { offhand: $item`Drunkula's wineglass` }
    //       : {}),
    //   }),
    // },
    // Timer Free Kills
    freeKillTask(
      {
        completed: () => have($effect`Everything Looks Yellow`),
        ready: () =>
          have($item`Jurassic Parka`) && have($skill`Torso Awareness`),
      },
      $skill`Spit jurassic acid`,
      {
        shirt: $item`Jurassic Parka`,
        modes: {
          parka: "dilophosaur",
        },
      },
    ),
    freeKillTask(
      {
        completed: () => have($effect`Everything Looks Red`),
        ready: () => have($skill`Free-For-All`),
      },
      $skill`Free-For-All`,
    ),
    // Timer Free Runs
    // freeRunTask(
    //   {
    //     ready: () => AsdonMartin.installed(),
    //     prepare: () => AsdonMartin.fillTo(50),
    //     completed: () => true,
    //     // getBanishedMonsters().has($skill`Asdon Martin: Spring-Loaded Front Bumper`),
    //   },
    //   $skill`Asdon Martin: Spring-Loaded Front Bumper`,
    // ),
    // freeRunTask(
    //   {
    //     ready: () => have($item`spring shoes`),
    //     completed: () => have($effect`Everything Looks Green`),
    //   },
    //   $skill`Spring Away`,
    //   { acc1: $item`spring shoes` },
    // ),
    // freeRunTask(
    //   {
    //     completed: () => get("cosmicBowlingBallReturnCombats") >= 1,
    //     ready: () => get("hasCosmicBowlingBall"),
    //   },
    //   $skill`Bowl a Curveball`,
    // ),
    // NC Forcers
    //...NC_FORCERS,
    // Free Kills
    freeKillTask(
      { completed: () => get("shockingLickCharges") === 0 },
      $skill`Shocking Lick`,
    ),
    freeKillTask(
      {
        completed: () => get("_firedJokestersGun"),
        ready: () => have($item`The Jokester's gun`),
      },
      $skill`Fire the Jokester's Gun`,
      { weapon: $item`The Jokester's gun` },
    ),
    freeKillTask(
      {
        completed: () => get("_shatteringPunchUsed") >= 3,
        ready: () => have($skill`Shattering Punch`),
      },
      $skill`Shattering Punch`,
    ),
    freeKillTask(
      {
        completed: () => get("_gingerbreadMobHitUsed"),
        ready: () => have($skill`Gingerbread Mob Hit`),
      },
      $skill`Gingerbread Mob Hit`,
    ),
    freeKillTask(
      {
        completed: () => get("_shadowBricksUsed") >= 13,
        ready: () => mallPrice($item`shadow brick`) < get("valueOfAdventure"),
        acquire: [
          {
            item: $item`shadow brick`,
          },
        ],
      },
      $item`shadow brick`,
    ),
    freeKillTask(
      {
        completed: () => get("_usedReplicaBatoomerang") >= 3,
        ready: () => have($item`replica bat-oomerang`),
      },
      $item`replica bat-oomerang`,
    ),
    freeKillTask(
      {
        completed: () => get("_chestXRayUsed") >= 3,
        ready: () => have($item`Lil' Doctor™ bag`),
      },
      $skill`Chest X-Ray`,
      { acc1: $item`Lil' Doctor™ bag` },
    ),
    freeKillTask(
      {
        completed: () => get("_assertYourAuthorityCast") >= 3,
        ready: () =>
          $items`Sheriff moustache, Sheriff badge, Sheriff pistol`.every((it) =>
            have(it),
          ),
      },
      $skill`Assert your Authority`,
      {
        weapon: $item`Sheriff pistol`,
        acc1: $item`Sheriff badge`,
        acc2: $item`Sheriff moustache`,
      },
    ),
    // Free Runs
    // freeRunTask(
    //   {
    //     completed: () => get("_feelHatredUsed") >= 3,
    //     ready: () => have($skill`Emotionally Chipped`),
    //   },
    //   $skill`Feel Hatred`,
    // ),
    // freeRunTask(
    //   {
    //     completed: () => get("_snokebombUsed") >= 3,
    //     ready: () => have($skill`Snokebomb`),
    //   },
    //   $skill`Snokebomb`,
    // ),
    // freeRunTask(
    //   {
    //     completed: () => get("_reflexHammerUsed") >= 3,
    //     ready: () => have($item`Lil' Doctor™ bag`),
    //   },
    //   $skill`Reflex Hammer`,
    //   { acc1: $item`Lil' Doctor™ bag` },
    // ),
    // Regular Attack
    {
      name: "Island Adventuring",
      completed: () => myAdventures() === 0,
      do: () => getLocation(),
      combat: new CrimboStrategy(() => Macro.islandCombat()),
      outfit: () => islandOutfit("regular"),
      sobriety: "either",
    },
  ] as CrimboTask[],
};
