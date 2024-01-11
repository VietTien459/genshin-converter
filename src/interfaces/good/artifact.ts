import {CharacterKey} from "../../types/good/CharacterKey";
import {StatKey} from "../../types/good/StatKey";
import {ArtifactSetKey} from "../../types/good/ArtifactsSetKey";

export interface IArtifact {
  setKey: ArtifactSetKey //e.g. "GladiatorsFinale"
  slotKey: SlotKey //e.g. "plume"
  level: number //0-20 inclusive
  rarity: number //1-5 inclusive
  mainStatKey: StatKey
  location: CharacterKey|"" //where "" means not equipped.
  lock: boolean //Whether the artifact is locked in game.
  substats: ISubstat[]
}

export interface ISubstat {
  key: StatKey //e.g. "critDMG_"
  value: number //e.g. 19.4
}

export type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"
