import { IEnka } from "../interfaces/enka/enka";

export class EnkaReader {
    
    public getCharactersID(enkaObj: IEnka) {
        console.log(enkaObj.avatarInfoList.map(char => char.avatarId));
    }
}