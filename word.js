// require your letter objects

var Word = function(wrd){
	// property to store the string wrd
	this.word = wrd;

	// a collection of letter objects
	this.letters = [];

	// property is the word found?
	this.found = false;

	this.getLets = function() {
		// populate the collection above with new Letter objects
		for (var i=0; i<this.word.length; i++){
			var addLet = new Letter(this.word[i]);
			this.letters.push(addLet);

		}

	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		if(this.letters.appear === true){
			this.wordFound = true;
    		}else{this.wordFound = false}
    };		



	this.checkIfLetterFound = function(guessLetter) {

		// iterate through the collection of letter Objects
		for (vari=0; i<this.letters.length; i++){
			if (this.guessLetter == this.letters[i]){
		

			// if guessLetter matches Letter property, the letter object should be shown
			return this.letters[i];
			};

		};
	};	


	this.wordRender = function() {
		// render the word based on if letters are found or ot found
				for (vari=0; i<this.letters.length; i++){

				return this.letters[i];
			};
	};

};

// export to use in main.js

module.exports = Word;