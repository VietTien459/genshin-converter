import { PlayerData } from "enkanetwork.js/dist/structs";
import { convertName } from "./name-converter";
import { convertCharacter } from "./character-converter";
import { convertWeapon } from "./weapon-converter";
import { convertArtifact } from "./artifact-converter";
import { EnkaReader } from "../reader/enka-reader";

export class GoodConverter {
    protected static enkaReader = new EnkaReader();
    constructor() {
    }

    convertToGOOD(playerData: PlayerData): IGOOD {
        let goodData: IGOOD = {
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
          character.equipment.weapon.name = GoodConverter.enkaReader.getNameByHash(character.equipment.weapon.nameTextMapHash)
          goodData.weapons?.push(convertWeapon(character.equipment.weapon, character.name as CharacterKey))
          goodData.artifacts?.push(...character.equipment.artifacts.map((artifact => {
            return convertArtifact(artifact, character.name as CharacterKey)
          })))
        })
        return goodData || null
    }
}
