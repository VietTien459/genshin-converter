import { Characters } from "enkanetwork.js/dist/structs";
import { convertName } from "./name-converter";
import {ICharacter} from "../interfaces/good/character";
import {CharacterKey} from "../types/good/CharacterKey";

export function convertCharacter(character: Characters): ICharacter {
    return {
        key: convertName(character.name) as CharacterKey,
        level: +character.properties.level.val,
        constellation: character.constellationsList.length,
        ascension: +character.properties.ascension.val,
        talent: {
            auto: character.skills.normalAttacks.level,
            skill: character.skills.elementalSkill.level,
            burst: character.skills.elementalBurst.level
        }
    } || null
}
