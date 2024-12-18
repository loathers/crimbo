import { OutfitSlot, OutfitSpec } from "grimoire-kolmafia";
import {
  canEquip,
  canInteract,
  Familiar,
  Item,
  itemAmount,
  Location,
  myClass,
  toSlot,
  totalTurnsPlayed,
} from "kolmafia";
import {
  $classes,
  $familiar,
  $familiars,
  $item,
  $location,
  CrystalBall,
  get,
  getRemainingStomach,
  have,
  sumNumbers,
} from "libram";

import { freeFightFamiliar, MenuOptions } from "./familiar";
import { garboAverageValue, garboValue } from "./garboValue";
import { args, getIsland, realmAvailable, sober } from "./lib";
import * as OrbManager from "./orbmanager";
import { HolidayIsland } from "./islands";

export function ifHave(
  slot: OutfitSlot,
  item: Item | undefined,
  condition?: () => boolean
): OutfitSpec {
  return item && have(item) && canEquip(item) && (condition?.() ?? true)
    ? Object.fromEntries([[slot, item]])
    : {};
}

export const drunkSpec = sober() ? {} : { offhand: $item`Drunkula's wineglass` };

export const orbSpec = () => {
  if (!CrystalBall.have()) return {};
  const island = getIsland();

  const prediction = OrbManager.ponder().get(island.location);
  if (!prediction || prediction === island.orbTarget) return { famequip: CrystalBall.orb };
  return {}
}


function mergeSpecs(...outfits: OutfitSpec[]): OutfitSpec {
  return outfits.reduce((current, next) => ({ ...next, ...current }), {});
}

const adventuresFamiliars = (allowEquipment?: boolean) =>
  allowEquipment ? $familiars`Temporal Riftlet, Reagnimated Gnome` : $familiars`Temporal Riftlet`;
const chooseFamiliar = (options: MenuOptions = {}): Familiar => {
  if (args.shrub && options.location?.zone === "Crimbo23" && get("shrubGifts") === "gifts") {
    return $familiar`Crimbo Shrub`;
  }
  return (
    (canInteract() && sober() ? adventuresFamiliars(options.allowEquipment) : []).find((f) =>
      have(f)
    ) ?? freeFightFamiliar(options)
  );
};

type TaskOptions = { location: Location; isFree?: boolean };
export function chooseQuestOutfit(
  { location, isFree }: TaskOptions,
  ...outfits: OutfitSpec[]
): OutfitSpec {
  const mergedOutfits = mergeSpecs(...outfits);
  const familiar = chooseFamiliar({ location, allowEquipment: !("famequip" in mergedOutfits) });
  const famEquip = mergeSpecs(
    ifHave("famequip", equipmentFamiliars.get(familiar)),
    ifHave("famequip", $item`tiny stillsuit`),
    ifHave("famequip", $item`amulet coin`)
  );

  const weapons = mergeSpecs(
    ifHave("weapon", $item`June cleaver`),
    ifHave("weapon", $item`Fourth of May Cosplay Saber`)
  );
  const offhands = mergeSpecs(
    ifHave("offhand", $item`deft pirate hook`, () => true), // pickpocket?
    ifHave("offhand", $item`carnivorous potted plant`),
    ifHave(
      "offhand",
      $item`cursed magnifying glass`,
      () => !isFree && get("_voidFreeFights") < 5 && get("cursedMagnifyingGlassCount") < 13
    )
  );

  const backs = mergeSpecs(
    ifHave(
      "back",
      $item`protonic accelerator pack`,
      () =>
        get("questPAGhost") === "unstarted" &&
        get("nextParanormalActivity") <= totalTurnsPlayed() &&
        sober()
    ),
    ifHave("back", $item`Buddy Bjorn`)
  );
  const spec = mergeSpecs(
    ifHave("hat", $item`Crown of Thrones`, () => !have($item`Buddy Bjorn`)),
    weapons,
    offhands,
    backs,
    { familiar },
    famEquip,
    ifHave(
      "pants",
      $item`designer sweatpants`,
      () => 25 * get("_sweatOutSomeBoozeUsed") + get("sweat") < 75
    ),
    ifHave(
      "pants",
      $item`Pantsgiving`,
      () =>
        get("_pantsgivingCount") < 50 ||
        (get("_pantsgivingFullness") < 2 && getRemainingStomach() === 0)
    ),
    { modifier: "Familiar Weight" }
  );

  const bestAccessories = getBestAccessories(location, isFree);
  for (let i = 0; i < 3; i++) {
    const accessory = bestAccessories[i];
    if (!accessory) break;
    spec[`acc${i + 1}` as OutfitSlot] = accessory;
  }
  const mergedSpec = mergeSpecs(...outfits, spec);

  const [goodFammy, lessGoodFammy] = [$item`Buddy Bjorn`, $item`Crown of Thrones`];
  const lessGoodSlot = toSlot(lessGoodFammy).toString() as OutfitSlot;
  if (!have(goodFammy) && have(lessGoodFammy) && !(lessGoodSlot in mergedSpec)) {
    mergedSpec[lessGoodSlot] = lessGoodFammy;
  } else {
    mergedSpec.avoid = [...(mergedSpec.avoid ?? []), lessGoodFammy];
  }

  return mergedSpec;
}

const equipmentFamiliars = new Map<Familiar, Item>([
  [$familiar`Reagnimated Gnome`, $item`gnomish housemaid's kgnee`],
  [$familiar`Shorter-Order Cook`, $item`blue plate`],
  [$familiar`Stocking Mimic`, $item`bag of many confections`],
]);

function luckyGoldRing() {
  // Volcoino has a low drop rate which isn't accounted for here
  // Overestimating until it drops is probably fine, don't @ me
  const dropValues = [
    100, // 80 - 120 meat
    ...[
      itemAmount($item`hobo nickel`) > 0 ? 100 : 0, // This should be closeted
      itemAmount($item`sand dollar`) > 0 ? garboValue($item`sand dollar`) : 0, // This should be closeted
      itemAmount($item`Freddy Kruegerand`) > 0 ? garboValue($item`Freddy Kruegerand`) : 0,
      realmAvailable("sleaze") ? garboValue($item`Beach Buck`) : 0,
      realmAvailable("spooky") ? garboValue($item`Coinspiracy`) : 0,
      realmAvailable("stench") ? garboValue($item`FunFunds™`) : 0,
      realmAvailable("hot") && !get("_luckyGoldRingVolcoino") ? garboValue($item`Volcoino`) : 0,
      realmAvailable("cold") ? garboValue($item`Wal-Mart gift certificate`) : 0,
      realmAvailable("fantasy") ? garboValue($item`Rubee™`) : 0,
    ].filter((value) => value > 0),
  ];

  // Items drop every ~10 turns
  return sumNumbers(dropValues) / dropValues.length / 10;
}

type AccessoryOptions = HolidayIsland & { isFree?: boolean };
const accessories: { item: Item; valueFunction: (options: AccessoryOptions) => number }[] = [
  {
    item: $item`mafia thumb ring`,
    valueFunction: ({ isFree }) => (!isFree ? (1 / 0.96 - 1) * get("valueOfAdventure") : 0),
  },
  {
    item: $item`lucky gold ring`,
    valueFunction: luckyGoldRing,
  },
  {
    item: $item`Mr. Screege's spectacles`,
    valueFunction: () => 180,
  },
  {
    item: $item`Mr. Cheeng's spectacles`,
    valueFunction: () => 220,
  },
  {
    item: $item`mime army infiltration glove`,
    valueFunction: ({ location }) => {
      // if we can already pickpocket or can't even with this, it's worthless
      if ($classes`Disco Bandit, Accordion Thief`.includes(myClass()) || !sober()) {
        return 0;
      }
      
      // Spirit value
      // Also deft pirate hook synergy
      // Do we only ever want glove alongside hook?
      return 0;
    },
  },
];

function getBestAccessories(location: Location, isFree?: boolean) {
  return accessories
    .filter(({ item }) => have(item) && canEquip(item))
    .map(({ item, valueFunction }) => ({ item, value: valueFunction({ location, isFree }) }))
    .sort(({ value: a }, { value: b }) => b - a)
    .map(({ item }) => item)
    .splice(0, 3);
}
