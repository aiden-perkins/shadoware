import * as fs from 'fs';
import * as schedule from 'node-schedule';
import gameMasterRaw from '$lib/server/data/game_master.json';
import oldMoveListRaw from '$lib/server/data/move_list.json';

function updateMoveList() {
    interface GameMasterMoveEntry {
        templateId: string;
        data: {
            moveSettings: {
                movementId: string;
                pokemonType: string;
                power: number;
                durationMs: number;
                damageWindowStartMs: number;
                damageWindowEndMs: number;
                energyDelta: number;
            };
        };
    }
    const gameMaster: GameMasterMoveEntry[] = gameMasterRaw as GameMasterMoveEntry[];
    interface Move {
        name: string;
        typing: string;
        power: number;
        energyDelta: number;
        damageWindowStartMs: number;
        damageWindowEndMs: number;
        durationMs: number;
    }
    const oldMoveList: Move[] = oldMoveListRaw as Move[];
    const hidden_power_types = [  // Unless Niantic fixes it in the future, fairy is not a possible hidden power type
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark"
    ];
    let moveList: Move[] = [];
    for (const entry of gameMaster) {
        if (entry['templateId'].match(/^V[0-9]{4}_MOVE_/)) {
            let name = entry['data']['moveSettings']['movementId'].toLowerCase().replace('_fast', '');
            name = name.replace(/_/g, ' ');
            const energyDelta = ('energyDelta' in entry['data']['moveSettings']) ? Math.abs(entry['data']['moveSettings']['energyDelta']) : 0;
            const power = ('power' in entry['data']['moveSettings']) ? entry['data']['moveSettings']['power'] : 0;
            let moveData = {
                name: name,
                typing: entry['data']['moveSettings']['pokemonType'].split('_')[2].toLowerCase(),
                power: power,
                energyDelta: energyDelta,
                damageWindowStartMs: entry['data']['moveSettings']['damageWindowStartMs'],
                damageWindowEndMs: entry['data']['moveSettings']['damageWindowEndMs'],
                durationMs: entry['data']['moveSettings']['durationMs']
            };
            if (name.includes('hidden power')) {
                for (const type of hidden_power_types) {
                    const newMove = {...moveData, name: name + ' ' + type, typing: type};
                    moveList.push(newMove);
                }
            } else {  // Hidden power can't be normal typing
                moveList.push(moveData);
            }
        }
    }
    if (oldMoveList.length !== moveList.length) {
        for (let i = oldMoveList.length; i < moveList.length; i++) {
            console.log(`New move with name ${moveList[i].name}`);
        }
    }
    fs.writeFileSync('./src/lib/server/data/move_list.json', JSON.stringify(moveList, null, 4));
}
function updatePokemonList() {

}
function updateGameMaster() {
    fs.writeFileSync('./src/lib/server/data/game_master.json', JSON.stringify(moveList, null, 4));


}

export function updateEveryDay() {
    updateMoveList();
    schedule.scheduleJob('0 0 * * *', updateMoveList);
    schedule.scheduleJob('0 0 * * *', updatePokemonList);
    schedule.scheduleJob('0 0 * * *', updateGameMaster);
}
