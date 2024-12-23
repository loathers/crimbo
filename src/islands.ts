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
  location: $location`Easter Island`,
  element: $element`Stench`,
  orbTarget: $monster`moai`,
  choice: 1538,
  currency: $item`Spirit of Easter`,
};

const StPatricksDay: HolidayIsland = {
  location: $location`St. Patrick's Day Island`,
  element: $element`Sleaze`,
  orbTarget: $monster`giant potato`,
  choice: 1539,
  currency: $item`Spirit of St. Patrick's Day`,
};

const VeteransDay: HolidayIsland = {
  location: $location`Veterans Day Island`,
  element: $element`Hot`,
  orbTarget: $monster`Section 11`,
  choice: 1540,
  currency: $item`Spirit of Veteran's Day`,
};

const Thanksgiving: HolidayIsland = {
  location: $location`Thanksgiving Island`,
  element: $element`Cold`,
  orbTarget: $monster`pumpkin spice wraith`,
  choice: 1541,
  currency: $item`Spirit of Thanksgiving`,
};

const Christmas: HolidayIsland = {
  // eslint-disable-next-line libram/verify-constants
  location: $location`Christmas Island`,
  element: $element`spooky`,
  // eslint-disable-next-line libram/verify-constants
  orbTarget: $monster`magically-animated snowman`,
  choice: 1542,
  currency: $item`Spirit of Christmas`,
};

export default { Easter, StPatricksDay, VeteransDay, Thanksgiving, Christmas };
