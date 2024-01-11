import {Artifact} from "enkanetwork.js/dist/structs";
import {SlotConvertMap, StatConvertMap} from "./prop-converter";
import {convertName} from "./name-converter";
import {IArtifact, ISubstat, SlotKey} from "../interfaces/good/artifact";
import {ArtifactSetKey} from "../types/good/ArtifactsSetKey";
import {StatKey} from "../types/good/StatKey";
import {CharacterKey} from "../types/good/CharacterKey";

/**
 * Convert Artifact to GOOD Format
 *
 * @param artifact artifact data from EnkaNetwork.API
 * @param location
 * @returns artifact data in GOOD format
 */
export function convertArtifact(artifact: Artifact, location?: CharacterKey): IArtifact {
    return {
        setKey: convertName(artifact.setName) as ArtifactSetKey,
        slotKey: SlotConvertMap.get(artifact.equipType) as SlotKey,
        level: artifact.level - 1,
        rarity: artifact.stars,
        mainStatKey: StatConvertMap.get(artifact.mainstat.stat) as StatKey,
        location: convertName(location || "") as CharacterKey,
        lock: false,
        substats: artifact.substats.map(convertArtifactSubStat)
    }
}

/**
 * Convert Artifact SubStats to GOOD Format
 *
 * @returns artifact substat data in GOOD format
 * @param artifactSubstats
 */
export function convertArtifactSubStat(artifactSubstats: any): ISubstat {
    return {
        key: StatConvertMap.get(artifactSubstats.stat) as StatKey,
        value: artifactSubstats.statValue
    }
}
