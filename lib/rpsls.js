export function rps(shot) {
	const options = ["rock", "paper", "scissors"]
	
	if (shot === undefined) {
        	return {player: options[Math.floor(Math.random() * 3)]};
	}

	shot = shot.toLowerCase();

	if (!options.includes(shot)) {
		 console.error(`${shot} is out of range.`);
	}

	const shot2 = options[Math.floor(Math.random() * 3)];

	if ((shot == "rock" && shot2 == "rock") || (shot == "scissors" && shot2 == "scissors") || (shot == "paper" && shot2 == "paper")) {
		return {player: shot, opponent: shot2, result: "tie"}
	}
	else if ((shot == "rock" && shot2 == "scissors") || (shot == "scissors" && shot2 == "paper") || (shot == "paper" && shot2 == "rock") {
		 return {player: shot, opponent: shot2, result: "win"}
        }
	else {
		 return {player: shot, opponent: shot2, result: "lose"}
        }
}

export function rpsls(shot) {
	const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
	
	if (shot === undefined) {
        	return {player: options[Math.floor(Math.random() * 5)]};
        }

	shot = shot.toLowerCase();

        if (!options.includes(shot)) {
                 console.error(`${shot} is out of range.`);
        }

	const shot2 = options[Math.floor(Math.random() * 5)]

	if ((shot == "rock" && shot2 == "rock") || (shot == "scissors" && shot2 == "scissors") || (shot == "paper" && shot2 == "paper") || (shot == "paper" && shot2 == "spock") || (shot == "spock" && shot2 == "spock")) {
                return {player: shot, opponent: shot2, result: "tie"}
        }
        else if ((shot == "rock" && shot2 == "scissors") || (shot == "rock" && shot2 == "lizard")  || (shot == "scissors" && shot2 == "paper") || (shot == "scissors" && shot2 == "lizard") || (shot == "paper" && shot2 == "rock") || (shot == "paper" && shot2 == "spock") || (shot == "lizard" && shot2 == "paper") || (shot == "lizard" && shot2 == "spock") || (shot == "spock" && shot2 == "rock") || (shot == "spock" && shot2 == "scissors")) {
                 return {player: shot, opponent: shot2, result: "win"}
        }
        else {
                 return {player: shot, opponent: shot2, result: "lose"}
        }
}
