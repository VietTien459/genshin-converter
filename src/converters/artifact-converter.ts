import { Artifact } from "enkanetwork.js/dist/structs";
import { SlotConvertMap, StatConvertMap } from "./prop-converter";
import { convertName } from "./name-converter";

/**
 * Convert Artifact to GOOD Format
 *
 * @param artifact artifact data from EnkaNetwork.API
 * @returns artifact data in GOOD format
 */
export function convertArtifact(artifact: Artifact , location?: CharacterKey): IArtifact {
    return {
        setKey: convertName(artifact.setName) as ArtifactSetKey,
        slotKey: SlotConvertMap.get(artifact.equipType) as SlotKey,
        level: artifact.level-1,
        rarity: artifact.stars,
        mainStatKey: StatConvertMap.get(artifact.mainstat.stat) as StatKey,
        location: convertName(location || "")  as CharacterKey,
        lock: false ,
        substats: artifact.substats.map(convertArtifactSubStat)
    }
}

/**
 * Convert Artifact SubStats to GOOD Format
 *
 * @param artifact artifact substats data from EnkaNetwork.API
 * @returns artifact substat data in GOOD format
 */
export function convertArtifactSubStat(artifactSubstats: any): ISubstat {
    return {
        key: StatConvertMap.get(artifactSubstats.stat) as StatKey,  
        value: artifactSubstats.statValue
    }
}