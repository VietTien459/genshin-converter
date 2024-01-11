export function convertName(equipmentName: string) {

    return equipmentName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
        .replaceAll(/[ '\"]/g, '')

}

