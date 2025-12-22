import {
  ChoiceAdventureScript,
  abort,
  availableChoiceOptions,
  runChoice,
  xpath,
} from "kolmafia";
import { NumericOrStringProperty, get, maxBy } from "libram";

const DART_PERKS: string[] = [
  "Bullseyes do not impress you much",
  "You are less impressed by bullseyes",
  "25% better chance to hit bullseyes",
  "25% More Accurate bullseye targeting",
  "25% Better bullseye targeting",
  "Extra stats from stats targets",
  "Expand your dart capacity by 1",
  "Throw a second dart quickly",
  "Butt awareness",
  "Increase Dart Deleveling from deleveling targets",
  "Add Hot Damage",
  "Add Cold Damage",
  "Add Sleaze Damage",
  "Add Spooky Damage",
  "Add Stench Damage",
  "Deal 25-50% more damage",
  "Deal 25-50% extra damage",
  "Deal 25-50% greater damage",
];

function getBestDartsOption(): number {
  return Number(
    maxBy(
      Object.entries(availableChoiceOptions()),
      ([text]) =>
        DART_PERKS.includes(text) ? DART_PERKS.indexOf(text) : Infinity,
      true,
    )[0],
  );
}

function getgetPeridoteOption(): [number, string | null] {
  const option = get("choiceAdventure1557" as NumericOrStringProperty);
  if (typeof option === "number") return [option, null];
  const [value, addendums] = option.split("&", 2);
  return [Number(value), addendums];
}

export function runPeridotChoice(pageText: string) {
  const [option, addendums] = getgetPeridoteOption();
  if (!addendums) return void runChoice(option);
  if (!addendums.startsWith("bandersnatch=")) {
    abort(`Invalid peridot args: ${addendums}`);
  }
  const monsterId = addendums.slice("bandersnatch=".length);

  if (
    !xpath(
      pageText,
      `//form//input[@name='bandersnatch'][@value='${monsterId}']`,
    ).length
  ) {
    return void runChoice(2); // Monster not available
  }
  return void runChoice(option, addendums);
}

export const main: ChoiceAdventureScript = (choiceNumber, pageText) => {
  switch (choiceNumber) {
    case 1525:
      return void runChoice(getBestDartsOption());
    case 1557:
      return void runPeridotChoice(pageText);
  }
};
