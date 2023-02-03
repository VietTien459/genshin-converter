import { ObjectValues } from "../objectValues"

export const PROP_ID =  {
    FightPropBaseAttack : "FIGHT_PROP_BASE_ATTACK",
    FightPropAttack : "FIGHT_PROP_ATTACK",
    FightPropHP : "FIGHT_PROP_HP",
    FightPropDefense : "FIGHT_PROP_DEFENSE",
    FightPropHPPercent : "FIGHT_PROP_HP_PERCENT",
    FightPropAttackPercent : "FIGHT_PROP_ATTACK_PERCENT",
    FightPropDefensePercent : "FIGHT_PROP_DEFENSE_PERCENT",
    FightPropCritical : "FIGHT_PROP_CRITICAL",
    FightPropCriticalHurt : "FIGHT_PROP_CRITICAL_HURT",
    FightPropChargeEfficiency : "FIGHT_PROP_CHARGE_EFFICIENCY",
    FightPropHealAdd : "FIGHT_PROP_HEAL_ADD",
    FightPropElementMastery : "FIGHT_PROP_ELEMENT_MASTERY",
    FightPropPhysicalAddHurt : "FIGHT_PROP_PHYSICAL_ADD_HURT",
    FightPropFireAddHurt : "FIGHT_PROP_FIRE_ADD_HURT",
    FightPropElecAddHurt : "FIGHT_PROP_ELEC_ADD_HURT",
    FightPropWaterAddHurt : "FIGHT_PROP_WATER_ADD_HURT",
    FightPropWindAddHurt : "FIGHT_PROP_WIND_ADD_HURT",
    FightPropIceAddHurt : "FIGHT_PROP_ICE_ADD_HURT",
    FightPropRockAddHurt : "FIGHT_PROP_ROCK_ADD_HURT",
    FightPropGrassAddHurt : "FIGHT_PROP_GRASS_ADD_HURT",
} as const

export type PropID = ObjectValues<typeof PROP_ID>
