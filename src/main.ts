import { PlayerData, Weapon } from "enkanetwork.js/dist/structs";
import { filter, finalize, map, tap } from "rxjs";
import { EnkaReader } from "./reader/enka-reader"
import { convertCharacter } from "./converters/character-converter";
import { convertWeapon } from "./converters/weapon-converter";
import { convertArtifact } from "./converters/artifact-converter";
import { GoodConverter } from "./converters/good-converter";

let enkaReader = new EnkaReader()

let goodConverter = new GoodConverter()

var fs = require('fs');


enkaReader.getPlayerData(709445677)
  .pipe(
    filter(r => r != null),
    map(goodConverter.convertToGOOD),
    tap((data)=>{
      fs.writeFile('target/player-data.json', JSON.stringify(data), 'utf8', () => {console.log("Done")})
    })
  ).subscribe()





