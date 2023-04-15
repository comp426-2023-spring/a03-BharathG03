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
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)")
    console.log();
    console.log(" -h, --help      display this help message and exit");
    console.log(" -r, --rules     display the rules and exit");
    console.log();
    console.log("Examples:");
    console.log("node-rps        Return JSON with single player RPS result.");
    console.log("                e.g. { \"player\": \"rock\"}");
    console.log("node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("                  e.g {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}");

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