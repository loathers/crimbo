import { DraggableFight } from "garbo-lib";
import { Outfit, OutfitSlot, OutfitSpec } from "grimoire-kolmafia";
import {
  Familiar,
  Item,
  Location,
  abort,
  canEquip,
  canInteract,
  getMonsters,
  inebrietyLimit,
  itemAmount,
  myInebriety,
  totalTurnsPlayed,
} from "kolmafia";
import {
  $familiar,
  $familiars,
  $item,
  $phylum,
  CrownOfThrones,
  Delayed,
  SkeletonOfCrimboPast,
  get,
  getRemainingStomach,
  have,
  sum,
  sumNumbers,
  undelay,
} from "libram";

import { MenuOptions, freeFightFamiliar } from "./familiar";
import { args, isCrimboZone, realmAvailable, sober } from "./lib";
import { garboValue } from "./value";
import { wanderer } from "./wanderer";

export function ifHave(
  slot: OutfitSlot,
  item: Item | undefined,
  condition?: Delayed<boolean>,
): OutfitSpec {
  return item && have(item) && canEquip(item) && undelay(condition ?? true)
    ? Object.fromEntries([[slot, item]])
    : {};
}

export const drunkSpec = sober()
  ? {}
  : { offhand: $item`Drunkula's wineglass` };

// export const orbSpec = () => {
//   if (!CrystalBall.have()) return {};
//   const island = getIsland();

//   const prediction = CrystalBall.getPrediction().get(island.location);
//   if (!prediction || prediction === island.orbTarget) return { famequip: CrystalBall.orb };
//   return {};
// };

function mergeSpecs(...outfits: OutfitSpec[]): OutfitSpec {
  return outfits.reduce((current, next) => ({ ...next, ...current }), {});
}

const adventuresFamiliars = (allowEquipment?: boolean) =>
  allowEquipment && have($item`gnomish housemaid's kgnee`)
    ? $familiars`Reagnimated Gnome, Temporal Riftlet`
    : $familiars`Temporal Riftlet`;
const chooseFamiliar = (options: MenuOptions = {}): Familiar => {
  if (
    options.location?.zone === "Crimbo25" ||
    options.location?.zone === "Override"
  ) {
    if (args.shrub && get("shrubGifts") === "gifts")
      return $familiar`Crimbo Shrub`;
    if (SkeletonOfCrimboPast.have() && get("_knuckleboneDrops") < 100)
      return $familiar`Skeleton of Crimbo Past`;
    if (
      have($familiar`Left-Hand Man`) &&
      have($item`bone-polishing rag`) &&
      have($item`Drunkula's wineglass`) &&
      !sober()
    )
      return $familiar`Left-Hand Man`;

    const adventuresFamiliar = adventuresFamiliars(options.allowEquipment).find(
      have,
    );
    if (adventuresFamiliar) return adventuresFamiliar;
  }
  return (
    (canInteract() && sober()
      ? adventuresFamiliars(options.allowEquipment)
      : []
    ).find((f) => have(f)) ?? freeFightFamiliar(options)
  );
};

type TaskOptions = {
  wandererType: DraggableFight | Location;
  isFree?: boolean;
};

const dropsValueFunction = (drops: Item[] | Map<Item, number>) =>
  drops instanceof Map
    ? sum(
        [...drops.entries()],
        ([item, quantity]) => quantity * garboValue(item),
      )
    : garboValue(...drops);
CrownOfThrones.createRiderMode("rider", { dropsValueFunction });

function ensureRider(): CrownOfThrones.FamiliarRider {
  const result = CrownOfThrones.pickRider("rider");
  if (!result) abort("Failed to make sensible bjorn decision!");
  return result;
}

export function taskOutfit(
  { wandererType, isFree }: TaskOptions,
  ...outfits: OutfitSpec[]
) {
  const location =
    wandererType instanceof Location
      ? wandererType
      : wanderer().getTarget(wandererType).location;
  const mergedOutfits = mergeSpecs(...outfits);
  const outfit = Outfit.from(
    mergedOutfits,
    new Error("Failed to build outfits"),
  );
  const familiar = chooseFamiliar({
    location,
    allowEquipment: !("famequip" in mergedOutfits),
  });
  outfit.equip(familiar);

  const famEquip = mergeSpecs(
    ifHave("famequip", equipmentFamiliars.get(familiar)),
    ifHave("famequip", $item`tiny stillsuit`),
    ifHave("famequip", $item`amulet coin`),
  );
  outfit.equip(famEquip);

  const weapon = mergeSpecs(
    ifHave(
      "weapon",
      $item`undertakers' forceps`,
      isCrimboZone(location) && myInebriety() <= inebrietyLimit(),
    ),
    ifHave("weapon", $item`June cleaver`),
    ifHave("weapon", $item`Fourth of May Cosplay Saber`),
  );
  outfit.equip(weapon);

  const offhand = mergeSpecs(
    ifHave(
      "offhand",
      $item`Drunkula's wineglass`,
      myInebriety() > inebrietyLimit(),
    ),
    ifHave("offhand", $item`bone-polishing rag`, isCrimboZone(location)),
    ifHave(
      "offhand",
      $item`cursed magnifying glass`,
      !isFree &&
        get("_voidFreeFights") < 5 &&
        get("cursedMagnifyingGlassCount") < 13,
    ),
    ifHave("offhand", $item`carnivorous potted plant`, !isFree),
    ifHave(
      "offhand",
      $item`June cleaver`,
      !outfit.haveEquipped($item`June cleaver`) &&
        outfit.canEquip($item`June cleaver`),
    ),
  );
  outfit.equip(offhand);

  const back = mergeSpecs(
    ifHave(
      "back",
      $item`protonic accelerator pack`,
      get("questPAGhost") === "unstarted" &&
        get("nextParanormalActivity") <= totalTurnsPlayed() &&
        sober(),
    ),
    ifHave("back", $item`Buddy Bjorn`),
  );
  outfit.equip(back);

  const pants = mergeSpecs(
    ifHave(
      "pants",
      $item`designer sweatpants`,
      25 * get("_sweatOutSomeBoozeUsed") + get("sweat") < 75,
    ),
    ifHave(
      "pants",
      $item`Pantsgiving`,
      get("_pantsgivingCount") < 50 ||
        (get("_pantsgivingFullness") < 2 && getRemainingStomach() === 0),
    ),
    ifHave(
      "pants",
      $item`tearaway pants`,
      getMonsters(location).some(({ phylum }) => phylum === $phylum`plant`),
    ),
  );
  outfit.equip(pants);

  if (!outfit.haveEquipped($item`Buddy Bjorn`))
    outfit.equip(ifHave("hat", $item`Crown of Thrones`));

  if (
    outfit.familiar === $familiar`Left-Hand Man` &&
    !sober() &&
    isCrimboZone(location)
  )
    outfit.equip({ famequip: $item`bone-polishing rag` });

  for (const acc of getBestAccessories(location, isFree)) outfit.equip(acc);

  if (outfit.haveEquipped($item`Buddy Bjorn`)) {
    outfit.bjornify(ensureRider().familiar);
  } else if (outfit.haveEquipped($item`Crown of Thrones`)) {
    outfit.enthrone(ensureRider().familiar);
  }

  if (
    (
      $familiars`Peace Turkey, Temporal Riftlet, Reagnimated Gnome` as (
        | Familiar
        | undefined
      )[]
    ).includes(outfit.familiar)
  ) {
    outfit.modifier.push("1 Familiar Weight");
  }

  return outfit;
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
      itemAmount($item`Freddy Kruegerand`) > 0
        ? garboValue($item`Freddy Kruegerand`)
        : 0,
      realmAvailable("sleaze") ? garboValue($item`Beach Buck`) : 0,
      realmAvailable("spooky") ? garboValue($item`Coinspiracy`) : 0,
      realmAvailable("stench") ? garboValue($item`FunFunds™`) : 0,
      realmAvailable("hot") && !get("_luckyGoldRingVolcoino")
        ? garboValue($item`Volcoino`)
        : 0,
      realmAvailable("cold") ? garboValue($item`Wal-Mart gift certificate`) : 0,
      realmAvailable("fantasy") ? garboValue($item`Rubee™`) : 0,
    ].filter((value) => value > 0),
  ];

  // Items drop every ~10 turns
  return sumNumbers(dropValues) / dropValues.length / 10;
}

type AccessoryOptions = { location: Location; isFree?: boolean };
const accessories: {
  item: Item;
  valueFunction: (options: AccessoryOptions) => number;
}[] = [
  {
    item: $item`mafia thumb ring`,
    valueFunction: ({ isFree }) =>
      !isFree ? (1 / 0.96 - 1) * get("valueOfAdventure") : 0,
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
];

function getBestAccessories(location: Location, isFree?: boolean) {
  return accessories
    .filter(({ item }) => have(item) && canEquip(item))
    .map(({ item, valueFunction }) => ({
      item,
      value: valueFunction({ location, isFree }),
    }))
    .sort(({ value: a }, { value: b }) => b - a)
    .map(({ item }) => item)
    .splice(0, 3);
}
