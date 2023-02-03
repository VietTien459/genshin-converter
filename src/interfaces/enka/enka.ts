import { EquipType } from "./equipType";
import { ItemType } from "./itemType";
import { PropID } from "./propId";

export interface IEnka {
    playerInfo: PlayerInfo;
    avatarInfoList: AvatarInfoList[];
    ttl?: number;
    uid?: string;
}

export interface AvatarInfoList {
    avatarId: number;
    talentIdList?: number[];
    propMap: { [key: string]: PropMap };
    fightPropMap: { [key: string]: number | undefined };
    skillDepotId: number;
    inherentProudSkillList: number[];
    skillLevelMap: { [key: string]: number | undefined };
    equipList: EquipList[];
    fetterInfo: FetterInfo;
    proudSkillExtraLevelMap?: { [key: string]: number | undefined };
}

export interface EquipList {
    itemId: number;
    reliquary?: Reliquary;
    flat: Flat;
    weapon?: Weapon;
}

export interface Flat {
    nameTextMapHash: string;
    setNameTextMapHash?: string;
    rankLevel: number;
    reliquaryMainstat?: ReliquaryMainstat;
    reliquarySubstats?: Stat[];
    itemType: ItemType;
    icon: string;
    equipType?: EquipType;
    weaponStats?: Stat[];
}


export interface ReliquaryMainstat {
    mainPropId?: PropID;
    statValue: number;
}


export interface Stat {
    appendPropId: PropID;
    statValue: number;
}

export interface Reliquary {
    level: number;
    mainPropId: number;
    appendPropIdList: number[];
}

export interface Weapon {
    level: number;
    promoteLevel: number;
    affixMap: { [key: string]: number };
}

export interface FetterInfo {
    expLevel: number;
}

export interface PropMap {
    type: number;
    ival?: string;
    val?: string;
}

export interface PlayerInfo {
    nickname: string;
    signature?: string;
    level: number;
    worldLevel: number;
    nameCardId: number;
    finishAchievementNum: number;
    towerFloorIndex: number;
    towerLevelIndex: number;
    showAvatarInfoList: ShowAvatarInfoList[];
    showNameCardIdList: number[];
    profilePicture: ProfilePicture;
}

export interface ProfilePicture {
    avatarId: number;
}

export interface ShowAvatarInfoList {
    avatarId: number;
    level: number;
    costumeId?: string;
}
