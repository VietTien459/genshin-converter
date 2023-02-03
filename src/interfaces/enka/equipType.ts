import { ObjectValues } from "../objectValues"

export const EQUIP_TYPE = {
    EquipBracer: "EQUIP_BRACER",
    EquipDress: "EQUIP_DRESS",
    EquipNecklace: "EQUIP_NECKLACE",
    EquipRing: "EQUIP_RING",
    EquipShoes: "EQUIP_SHOES",
} as const

export type EquipType = ObjectValues<typeof EQUIP_TYPE>
