import { Weapon } from "enkanetwork.js/dist/structs";
import { convertName } from "./name-converter";
import {CharacterKey} from "../types/good/CharacterKey";
import {IWeapon} from "../interfaces/good/weapon";
import {WeaponKey} from "../types/good/WeaponKey";

export function convertWeapon(weapon: Weapon, location?: CharacterKey): IWeapon {
    return {
        key: convertName(weapon.name) as WeaponKey,
        level: +weapon.level,
        ascension: +weapon.ascensionLevel,
        refinement: +weapon.refinement.level,
        location: convertName(location || "")  as CharacterKey,
        lock: false
    } || null
}
