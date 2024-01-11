import {PlayerData} from "enkanetwork.js/dist/structs";
import {convertCharacter} from "./character-converter";
import {convertWeapon} from "./weapon-converter";
import {convertArtifact} from "./artifact-converter";
import {IGOOD} from "../interfaces/good/good";
import {CharacterKey} from "../types/good/CharacterKey";

export class GoodConverter {

    convertToGOOD(playerData: PlayerData): IGOOD {
        const goodData: IGOOD = {
            format: "GOOD",
            version: 0,
            source: 'genshin-converter',
            characters: [],
            artifacts: [],
            weapons: [],
        }

        playerData.characters
            .forEach(character => {
                goodData.characters?.push(convertCharacter(character))
                goodData.weapons?.push(convertWeapon(character.equipment.weapon, character.name as CharacterKey))
                goodData.artifacts?.push(...character.equipment.artifacts.map((artifact => {
                    return convertArtifact(artifact, character.name as CharacterKey)
                })))
            })
        return goodData || null
    }
}
