import {from} from 'rxjs'
import {Observable} from "rxjs/internal/Observable";
import {PlayerData} from "enkanetwork.js/dist/structs";
import {convertName} from '../converters/name-converter';

const {Wrapper} = require('enkanetwork.js')

const {AssetFinder} = require('enkanetwork.js')

export class EnkaReader {
    private static EnkaWrapper = new Wrapper({
        cache: false
    });

    private static Finder = new AssetFinder()

    public getPlayerData(uid: number): Observable<PlayerData> {
        return from(EnkaReader.EnkaWrapper.getPlayer(uid)) as Observable<PlayerData>
    }

    public getNameByHash(nameTextMapHash: string): string {
        return convertName(EnkaReader.Finder.hash(nameTextMapHash).value)
    }
}


