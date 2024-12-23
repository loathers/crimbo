import { Element, Item, Location, Monster } from "kolmafia";
import { $element, $item, $location, $monster } from "libram";

export type HolidayIsland = {
  location: Location;
  orbTarget: Monster;
  element: Element;
  choice: number;
  currency: Item;
};

const Easter: HolidayIsland = {
  // eslint-disable-next-line libram/verify-constants
  location: $location`Easter Island`,
  element: $element`Stench`,
  // eslint-disable-next-line libram/verify-constants
  orbTarget: $monster`moai`,
  choice: 1538,
  // eslint-disable-next-line libram/verify-constants
  currency: $item`Spirit of Easter,`,
};

const StPatrick: HolidayIsland = {
  // eslint-disable-next-line libram/verify-constants
  location: $location`St. Patrick's Day Island`,
  element: $element`Sleaze`,
  // eslint-disable-next-line libram/verify-constants
  orbTarget: $monster`giant potato`,
  choice: 1539,
  // eslint-disable-next-line libram/verify-constants
  currency: $item`Spirit of St. Patrick's Day`,
};

const Veteran: HolidayIsland = {
  location: $location`Veterans Day Island`,
  element: $element`Hot`,
  orbTarget: $monster`Section 11`,
  choice: 1540,
  currency: $item`Spirit of Veteran's Day`
}

const Thanksgiving: HolidayIsland = {
  location: $location`Thanksgiving Island`,
  element: $element`Cold`,
  orbTarget: $monster`pumpkin spice wraith`,
  choice: 1541,
  currency: $item`Spirit of Thanksgiving`
}

export default { Easter, StPatrick, Veteran, Thanksgiving };
