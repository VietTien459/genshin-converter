import { ObjectValues } from "../objectValues"

export const ITEM_TYPE =  {
    ItemReliquary : "ITEM_RELIQUARY",
    ItemWeapon : "ITEM_WEAPON",
} as const

export type ItemType = ObjectValues<typeof ITEM_TYPE>
