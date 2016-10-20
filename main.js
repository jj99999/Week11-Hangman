var gameWord = require('./game.js');

var Letter = require('./letter.js');

var Word = require('./word.js');

var inquirer = require('inquirer');





// require prompt to use to make the game 





game = {
	wordBank : gameWord.gameWord.gameWords,
	wordsWon : 0,   						// count of words Found
	guessesRemaining : 10, 					//per word
	currentWrd : null, 						//the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		if (guessesRemaining=10) {
		//get a random word from the array
			var randomNmr = Math.floor(Math.random() * this.wordBank.length);
			this.currentWrd = new Word [this.wordBank[randomNmr]];
			
			//populate currentWrd (made from Word constructor function) object with letters
			this.currentWrd.getLets();

			// show word to user as blanks
			 console.log(this.currentWord.wordRender());

		this.keepPromptingUser();

		}


	}, 
	
	resetGuessesRemaining : function(){
    	// reset guess count for new game	

    	guessesRemaining = 10; 
	},
	
	keepPromptingUser : function(){
		var self = this;


    	inquirer.prompt([{
      		name: "guessLetter",
      		type: "input",
      		message: "Choose a letter:  --  ",
      			validate: function(value) {
        			if(isLetter(value)){
          				return true;}else{return false;}
      				}
		}])

		prompt.get(["guessLetter"], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
			

			// console log the letter you chose		    
		    console.log(result);
		    

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    if (letters.includes("guessLetter")){
		    	this.found=true;

		    }else{


				//if the user guessed incorrectly minus the number of guesses they have left
				guessesRemaining--;

				// and console.log if they were incorrect or correct
		    	console.log("Try again!")
		    }
				//check if you win only when you are right
        //end game
			 
		    
		    // display the user how many guesses remaining
			console.log("You only have "+guessesRemaining+"guesses left.")
				// render the word 
				
				
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			
				// if user has no guesses left, show them the word and tell them they lost
			
				// else show the user word and rendered
		    
		});
	}


};

game.startGame();
