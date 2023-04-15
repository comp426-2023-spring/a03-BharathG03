#!/usr/bin/env node

import { rps } from "../lib/rpsls.js"
import minimist from 'minimist';

var args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play the Lizard - Spock Expansion of Rock Paper Scissors(RPSLS)!");
    console.log();
    console.log("  - h, --help        display this help message and exit");
    console.log("  - r, --rules       display the rules and exit");
    console.log();
    console.log("Examples:");
    console.log("node-rps        Return JSON with single player RPSLS result.");
    console.log("                e.g. { \"player\": \"rock\" }");
    console.log("node-rps rock   Return JSON with results for RPSLS played against a simulated opponent.");
    console.log("                e.g { \"player\": \"rock\", \"opponent\": \"Spock\", \"result\": \"lose\" }");
}

if (args.r || args.rules) {
    console.log("Rules for Rock Paper Scissors:");
    console.log();
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock SMOOSHES Lizard");
    console.log("  - Lizard POISONS Spock");
    console.log("  - Spock SMASHES Scissors");
    console.log("  - Scissors DECAPITATES Lizard");
    console.log("  - Lizard EATS Paper");
    console.log("  - Paper DISPROVES Spock");
    console.log("  - Spock VAPORIZES Rock");
    console.log("  - Rock CRUSHES Scissors");
}

let player_shot = args._[0];

try {
    console.log(JSON.stringify(rps(player_shot)));
}
catch (e) {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
                        
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
}