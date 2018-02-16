// JavaScript Document
		var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		var choice = numbers[Math.floor(Math.random() * numbers. length)];
		var reset = " ";
		var userGuess;
		var win = 0;
		var loss = 0;

		console.log(choice);
		document.onkeyup = function(event){
		console.log(event.key);
		userGuess = event.key;
		console.log(userGuess);

		if (userGuess === reset){
			win = reset;
			loss = reset;
			document.getElementById("wincount").innerHTML = reset + "0";
			document.getElementById("losscount").innerHTML = reset + "0";
			document.getElementById("msg").innerHTML = reset;
			choice = numbers[Math.floor(Math.random() * numbers. length)];
			console.log("wins " + reset);
			console.log("losses " + reset);
			console.log(choice);
		}

		if (userGuess === choice){
			win++;
			document.getElementById("wincount").innerHTML = win;
			document.getElementById("msg").innerHTML = "<strong>Correct!</strong> Guess what number I'm thinking of now.";
			
			choice = numbers[Math.floor(Math.random() * numbers. length)];
			console.log("wins " + win);
			console.log("losses " + loss);
			console.log(choice + " Correct! guess what number I'm thinking of now.");		
		}
		
		else if (userGuess !== choice && userGuess !== reset){
			loss++;
			document.getElementById("losscount").innerHTML = loss;
			document.getElementById("msg").innerHTML = " <strong>Wrong!</strong> Guess again.";
			
			console.log("wins " + win);
			console.log("losses " + loss);
			console.log(choice + " Wrong! Guess again.");
		}
		}