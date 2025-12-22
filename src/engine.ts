import { CombatStrategy, Engine, Quest, Task } from "grimoire-kolmafia";
import { equippedAmount, haveEquipped, setAutoAttack } from "kolmafia";
import {
  $item,
  CrystalBall,
  JuneCleaver,
  PropertiesManager,
  get,
} from "libram";

import { bestJuneCleaverOption, shouldSkip } from "./juneCleaver";
import { getLocation, printd, sober } from "./lib";
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

export class CrimboEngine extends Engine<never, CrimboTask> {
  do(task: CrimboTask): void {
    super.do(task);
    if (
      CrystalBall.have() &&
      !haveEquipped(CrystalBall.orb) &&
      CrystalBall.getPrediction().has(getLocation())
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

  static defaultSettings = {
    ...super.defaultSettings,
    choiceAdventureScript: "crimbo_choice.js",
    stillsuitFamiliar: "mosquito",
    recoveryScript: "",
  };

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
          ]),
        ),
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
