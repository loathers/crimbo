import {
  Item,
  Skill,
  equippedItem,
  haveEquipped,
  haveSkill,
  itemType,
  myBuffedstat,
  myClass,
  myFamiliar,
  visitUrl,
  weaponType,
} from "kolmafia";
import {
  $class,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  $stat,
  SongBoom,
  SourceTerminal,
  StrictMacro,
  get,
  have,
  maxBy,
} from "libram";

import { canOpenRedPresent, timeToMeatify } from "./familiar";
import { getLocation, shouldRedigitize } from "./lib";

const gooKillSkills = [
  { skill: $skill`Nantlers`, stat: $stat`muscle` },
  { skill: $skill`Nanoshock`, stat: $stat`mysticality` },
  { skill: $skill`Audioclasm`, stat: $stat`moxie` },
];

let monsterManuelCached: boolean | undefined = undefined;
function monsterManuelAvailable(): boolean {
  if (monsterManuelCached !== undefined) return Boolean(monsterManuelCached);
  monsterManuelCached = visitUrl("questlog.php?which=3").includes(
    "Monster Manuel",
  );
  return Boolean(monsterManuelCached);
}

export default class Macro extends StrictMacro {
  tryHaveSkill(skill: Skill): this {
    return this.externalIf(have(skill), Macro.trySkill(skill));
  }

  static tryHaveSkill(skill: Skill): Macro {
    return new Macro().tryHaveSkill(skill);
  }

  tryHaveItem(item: Item): this {
    return this.externalIf(have(item), Macro.tryItem(item));
  }

  static tryHaveItem(item: Item): Macro {
    return new Macro().tryHaveItem(item);
  }

  redigitize(): this {
    return this.externalIf(
      shouldRedigitize(),
      Macro.if_(
        get("_sourceTerminalDigitizeMonster") ?? $monster.none,
        Macro.skill($skill`Digitize`),
      ),
    );
  }

  static redigitize(): Macro {
    return new Macro().redigitize();
  }

  doItems(wanted: Item[]): this {
    const steps = new Macro();
    const items = wanted.filter((i) => have(i));
    if (items.length) {
      if (!have($skill`Ambidextrous Funkslinging`)) {
        for (const item of items) steps.tryItem(item);
      } else {
        for (let i = 0; i <= items.length; i += 2) {
          const chunk = items.slice(i, i + 2);
          if (chunk.length === 2) steps.tryItem(chunk as [Item, Item]);
          else steps.tryItem(...chunk);
        }
      }
    }
    return this.step(steps);
  }

  static doItems(wanted: Item[]): Macro {
    return new Macro().doItems(wanted);
  }

  doStandardItems(): this {
    return this.doItems(
      $items`Rain-Doh blue balls, Time-Spinner, Rain-Doh indigo cup, porquoise-handled sixgun`,
    );
  }

  static doStandardItems(): Macro {
    return new Macro().doStandardItems();
  }

  doHardItems(): this {
    return this.doItems(
      $items`Mayor Ghost's scissors, El Vibrato restraints, train whistle, Rain-Doh blue balls, Time-Spinner, little red book, Rain-Doh indigo cup, porquoise-handled sixgun`,
    );
  }

  static doHardItems(): Macro {
    return new Macro().doHardItems();
  }

  familiarActions(): this {
    return this.externalIf(
      canOpenRedPresent() && myFamiliar() === $familiar`Crimbo Shrub`,
      Macro.trySkill($skill`Open a Big Red Present`),
    ).externalIf(
      timeToMeatify() && myFamiliar() === $familiar`Grey Goose`,
      Macro.trySkill($skill`Meatify Matter`),
    );
  }

  static familiarActions(): Macro {
    return new Macro().familiarActions();
  }

  hardKill(): this {
    if (myClass() === $class`Grey Goo`) return this;

    return this.externalIf(
      myBuffedstat($stat`mysticality`) >= myBuffedstat($stat`muscle`) ||
        weaponType(equippedItem($slot`weapon`)) !== $stat`muscle`,
      Macro.trySkillRepeat($skill`Saucegeyser`),
    )
      .externalIf(
        haveSkill($skill`Shieldbutt`) &&
          itemType(equippedItem($slot`offhand`)) === "shield" &&
          myClass() === $class`Turtle Tamer`,
        Macro.trySkillRepeat($skill`Shieldbutt`),
      )
      .trySkillRepeat($skill`Lunging Thrust-Smack`)
      .trySkillRepeat($skill`Kneebutt`);
  }

  static hardKill(): Macro {
    return new Macro().hardKill();
  }

  gooKill(): this {
    if (myClass() !== $class`Grey Goo`) return this;

    const gooKillSkill: Skill = maxBy(
      gooKillSkills.filter(({ skill }) => have(skill)),
      ({ stat }) => myBuffedstat(stat),
    ).skill;

    return this.externalIf(
      monsterManuelAvailable() && haveSkill($skill`Infinite Loop`),
      Macro.while_(
        `monsterhpabove ${myBuffedstat($stat`moxie`)}`,
        Macro.skill(gooKillSkill),
      )
        .skill($skill`Infinite Loop`)
        .repeat(),
      Macro.skill(gooKillSkill).repeat(),
    );
  }

  static gooKill(): Macro {
    return new Macro().gooKill();
  }

  standardCombat(): this {
    return this.tryHaveSkill($skill`Curse of Weaksauce`)
      .familiarActions()
      .miscSkills()
      .doStandardItems()
      .gooKill()
      .attack()
      .repeat();
  }

  static standardCombat(): Macro {
    return new Macro().standardCombat();
  }

  hardCombat(): this {
    return this.tryHaveSkill($skill`Curse of Weaksauce`)
      .familiarActions()
      .externalIf(
        have($skill`Meteor Lore`),
        Macro.skill($skill`Micrometeorite`),
      )
      .doHardItems()
      .miscSkills()
      .gooKill()
      .hardKill()
      .attack()
      .repeat();
  }

  static hardCombat(): Macro {
    return new Macro().hardCombat();
  }

  miscSkills(): this {
    return this.tryHaveSkill($skill`Pocket Crumbs`)
      .externalIf(
        SongBoom.song() === "Total Eclipse of Your Meat",
        Macro.tryHaveSkill($skill`Sing Along`),
      )
      .externalIf(
        haveEquipped($item`Pantsgiving`),
        Macro.trySkill($skill`Pocket Crumbs`),
      )
      .externalIf(
        SourceTerminal.getSkills().includes($skill`Extract`),
        Macro.trySkill($skill`Extract`),
      );
  }

  static miscSkills(): Macro {
    return new Macro().miscSkills();
  }

  pickpocket(): this {
    return this.step("pickpocket");
  }

  static pickpocket(): Macro {
    return new Macro().pickpocket();
  }

  itemOrSkill(thing: Item | Skill): this {
    if (thing instanceof Item) return this.item(thing);
    else return this.skill(thing);
  }

  islandKillWith(thing: Item | Skill): this {
    return this.pickpocket()
      .externalIf(
        haveEquipped($item`tearaway pants`),
        Macro.if_(
          "!pastround 1 && monsterphylum plant",
          Macro.skill($skill`Tear Away your Pants!`),
        ),
      )
      .itemOrSkill(thing);
  }

  static islandKillWith(thing: Item | Skill): Macro {
    return new Macro().islandKillWith(thing);
  }

  islandRunWith(thing: Item | Skill): this {
    return this.pickpocket()
      .externalIf(
        haveEquipped($item`tearaway pants`),
        Macro.if_(
          "!pastround 1 && monsterphylum plant",
          Macro.skill($skill`Tear Away your Pants!`),
        ),
      )
      .itemOrSkill(thing);
  }

  static islandRunWith(thing: Item | Skill): Macro {
    return new Macro().islandRunWith(thing);
  }

  islandCombat(): Macro {
    return this.pickpocket()
      .trySkill($skill`Darts: Aim for the Bullseye`)
      .externalIf(
        haveEquipped($item`tearaway pants`),
        Macro.if_(
          "!pastround 1 && monsterphylum plant",
          Macro.skill($skill`Tear Away your Pants!`),
        ),
      )
      .externalIf(
        getLocation() === $location`Smoldering Bone Spikes`,
        Macro.standardCombat(),
        Macro.hardCombat(),
      );
  }

  static islandCombat(): Macro {
    return new Macro().islandCombat();
  }
}
