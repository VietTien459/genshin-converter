import {filter, from, map, tap} from "rxjs";
import {GoodConverter} from "./converters/good-converter";

import fs from "fs";
import {Wrapper} from "enkanetwork.js";

const {genshin} = new Wrapper();

const goodConverter = new GoodConverter()
from(genshin.getPlayer(709445677))
    .pipe(
        filter(r => r != null),
        map(goodConverter.convertToGOOD),
        tap((data) => {
            fs.writeFile('target/player-data.json', JSON.stringify(data), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                } else {
                    console.log("Done");
                }
            })
        })
    )
    .subscribe()





