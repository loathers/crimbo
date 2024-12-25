import { CombatStrategy, Engine, Outfit, Quest, Task } from "grimoire-kolmafia";
import {
  bjornifyFamiliar,
  enthroneFamiliar,
  equip,
  equippedAmount,
  haveEquipped,
  itemAmount,
  setAutoAttack,
} from "kolmafia";
import {
  $familiar,
  $item,
  CrownOfThrones,
  CrystalBall,
  get,
  JuneCleaver,
  PropertiesManager,
} from "libram";

import { bestJuneCleaverOption, shouldSkip } from "./juneCleaver";
import { getIslands, printd, sober } from "./lib";
import Macro from "./macro";
import * as OrbManager from "./orbmanager";

export type CrimboTask = Task & {
  sobriety: "sober" | "drunk" | "either";
};

export type CrimboQuest = Quest<CrimboTask>;

const introAdventures: string[] = [];
export class CrimboStrategy extends CombatStrategy {
  constructor(macro: () => Macro) {
    super();
    this.macro(macro).autoattack(macro);
  }
}

CrownOfThrones.createRiderMode("default", {});
const chooseRider = () => CrownOfThrones.pickRider("default");
export class CrimboEngine extends Engine<never, CrimboTask> {
  do(task: CrimboTask): void {
    super.do(task);
    if (
      CrystalBall.have() &&
      !haveEquipped(CrystalBall.orb) &&
      getIslands().some(({ location }) => CrystalBall.getPrediction().has(location))
    ) {
      OrbManager.shrineGaze();
    }
  }

  available(task: CrimboTask): boolean {
    const sobriety =
      task.sobriety === "either" ||
      (sober() && task.sobriety === "sober") ||
      (!sober() && task.sobriety === "drunk");

    return sobriety && super.available(task);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
  }

  dress(task: CrimboTask, outfit: Outfit): void {
    super.dress(task, outfit);
    if (haveEquipped($item`Buddy Bjorn`)) {
      const choice = chooseRider();
      if (choice) bjornifyFamiliar(choice.familiar);
    } else if (haveEquipped($item`Crown of Thrones`)) {
      const choice = chooseRider();
      if (choice) enthroneFamiliar(choice.familiar);
    }
    if (itemAmount($item`tiny stillsuit`)) {
      equip($familiar`Mosquito`, $item`tiny stillsuit`);
    }
  }

  execute(task: CrimboTask): void {
    super.execute(task);
  }

  setChoices(task: CrimboTask, manager: PropertiesManager): void {
    super.setChoices(task, manager);
    if (equippedAmount($item`June cleaver`) > 0) {
      this.propertyManager.setChoices(
        Object.fromEntries(
          JuneCleaver.choices.map((choice) => [
            choice,
            shouldSkip(choice) ? 4 : bestJuneCleaverOption(choice),
          ])
        )
      );
    }
    this.propertyManager.setChoices({ 955: 2 });
  }

  shouldRepeatAdv(task: CrimboTask): boolean {
    if (["Poetic Justice", "Lost and Found"].includes(get("lastEncounter"))) {
      printd("Skipping repeating Adventure despite free NC (beaten up)");
      return false;
    }
    if (introAdventures.includes(get("lastEncounter"))) {
      printd(`Hit Intro adventure ${get("lastEncounter")} which is a free NC`);
      return true;
    }
    // We have a dedicated June Cleaver task
    // Keeping the special casing for poetic justice/lost and found around for future forks
    if (task.name.includes("June Cleaver")) return false;
    return super.shouldRepeatAdv(task);
  }

  print() {
    printd(`Task List:`);
    for (const task of this.tasks) {
      printd(`${task.name}: available:${this.available(task)}`);
    }
  }

  destruct(): void {
    super.destruct();
    setAutoAttack(0);
  }
}
