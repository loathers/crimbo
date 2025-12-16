import { ValueFunctions, makeValue } from "garbo-lib";
import { Item } from "kolmafia";
import { $item } from "libram";

let _valueFunctions: ValueFunctions;
// note: add spirits
const valueFunctions = () =>
  (_valueFunctions ??= makeValue({
    itemValues: new Map([[$item`fake hand`, 50000]]),
  }));
export function garboValue(...items: Item[]): number {
  return valueFunctions().averageValue(...items);
}
