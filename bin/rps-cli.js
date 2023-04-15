#!/usr/bin/env node

import { rps } from "../lib/rpsls.js"
import minimist from 'minimist';

var args = minimist(process.argv.slice(2));

print_help() {
    console.log(`Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

print_rules() {
    console.log(`Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);
}

if (args.h || args.help) {
    print_help();
}

if (args.r || args.rules) {
    print_rules();
}

let player_shot = args._[0];

try {
    console.log(JSON.stringify(rps(player_shot)));
}
catch (e) {
    print_help();
    print_rules();
}