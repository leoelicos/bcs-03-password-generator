// this Javascript document holds the code to run the Password Generator defined in index.html and style.css

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// preference — global object to store user preference
var preference = {
	characters: 0,
	numbers: true,
	upperLetters: true,
	lowerLetters: true,
	symbols: true,
};

const minCharacters = 8;
const maxCharacters = 128;
var validations = '';

function cancelMessage() {
	window.alert(validations + '\nYou cancelled. Bye ✌🏻\n');
}

// returns a password as a string
function generatePassword() {
	validations = 'Password preferences\n***********************\n';
	validations += 'Number of characters? ';

	// get user preference for password length
	preference.characters = window.prompt(validations + '(8–128)', '128');

	// validate data
	if (preference.characters == null) {
		// user cancelled
		cancelMessage();
		return '';
	}
	while (!(+preference.characters >= minCharacters && +preference.characters <= maxCharacters)) {
		// user entered invalid number, so keep trying
		preference.characters = window.prompt(`${validations}\n"${preference.characters}" is invalid. Type a number from 8 to 128`, '8');
		if (preference.characters == null) {
			// user cancelled
			cancelMessage();
			return '';
		}
	}
	if (+preference.characters >= minCharacters && +preference.characters <= maxCharacters) {
		// user was valid
		validations += preference.characters + '\n';
	}

	// get user preference for including numbers
	validations += 'Include numbers? ';
	preference.numbers = window.prompt(validations + ' (y/n)', 'y');

	if (preference.numbers == null) {
		// user cancelled
		cancelMessage();
		return '';
	}
	while (preference.numbers.toLowerCase() !== 'y' && preference.numbers.toLowerCase() !== 'n') {
		// user entered invalid character, so keep trying
		preference.numbers = window.prompt(`${validations}\n"${preference.numbers}" is invalid. Type (y/n)`, 'y');
		if (preference.numbers == null) {
			// user cancelled
			cancelMessage();
			return '';
		}
	}
	if (preference.numbers.toLowerCase() == 'y') {
		// user was valid
		validations += '✅\n';
		preference.numbers = true;
	} else if (preference.numbers.toLowerCase() == 'n') {
		// user was valid
		validations += '🚫\n';
		preference.numbers = false;
	}

	// get user preference for including uppercase letters
	validations += 'Include uppercase letters? ';
	preference.upperLetters = window.prompt(validations + ' (y/n)', 'y');

	if (preference.upperLetters == null) {
		// user cancelled
		cancelMessage();
		return '';
	}

	while (preference.upperLetters.toLowerCase() !== 'y' && preference.upperLetters.toLowerCase() !== 'n') {
		// user entered invalid character, so keep trying
		preference.upperLetters = window.prompt(`${validations}\n"${preference.upperLetters}" is invalid. Type (y/n)`, 'y');
		if (preference.upperLetters == null) {
			// user cancelled
			cancelMessage();
			return '';
		}
	}

	if (preference.upperLetters.toLowerCase() == 'y') {
		// user was valid
		validations += '✅\n';
		preference.upperLetters = true;
	} else if (preference.upperLetters.toLowerCase() == 'n') {
		// user was valid
		validations += '🚫\n';
		preference.upperLetters = false;
	}

	// get user preference for including lowercase letters
	validations += 'Include lowercase letters? ';
	preference.lowerLetters = window.prompt(validations + ' (y/n)', 'y');

	if (preference.lowerLetters == null) {
		// user cancelled
		cancelMessage();
		return '';
	}

	while (preference.lowerLetters.toLowerCase() !== 'y' && preference.lowerLetters.toLowerCase() !== 'n') {
		// user entered invalid character, so keep trying
		preference.lowerLetters = window.prompt(`${validations}\n"${preference.lowerLetters}" is invalid. Type (y/n)`, 'y');
		if (preference.lowerLetters == null) {
			// user cancelled
			cancelMessage();
			return '';
		}
	}

	if (preference.lowerLetters.toLowerCase() == 'y') {
		// user was valid
		validations += '✅\n';
		preference.lowerLetters = true;
	} else if (preference.lowerLetters.toLowerCase() == 'n') {
		// user was valid
		validations += '🚫\n';
		preference.lowerLetters = false;
	}

	// get user preference for including symbols
	validations += 'Include symbols? ';
	preference.symbols = window.prompt(validations + ' (y/n)', 'y');

	if (preference.symbols == null) {
		// user cancelled
		cancelMessage();
		return '';
	}
	while (preference.symbols.toLowerCase() !== 'y' && preference.symbols.toLowerCase() !== 'n') {
		// user entered invalid character, so keep trying
		preference.symbols = window.prompt(`${validations}\n"${preference.symbols}" is invalid. Type (y/n)`, 'y');
		if (preference.symbols == null) {
			// user cancelled
			cancelMessage();
			return '';
		}
	}
	if (preference.symbols.toLowerCase() == 'y') {
		// user was valid
		validations += '✅\n';
		preference.symbols = true;
	} else if (preference.symbols.toLowerCase() == 'n') {
		// user was valid
		validations += '🚫\n';
		preference.symbols = false;
	}

	// return a password based on characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols
	var finalPassword = getPassword(preference.characters, preference.numbers, preference.upperLetters, preference.lowerLetters, preference.symbols);

	if (finalPassword.length === 0) {
		validations += 'No numbers, letters or symbols were chosen. Try again?';
		if (window.confirm(validations) === true) {
			return generatePassword();
		} else {
			cancelMessage();
			return '';
		}
	} else {
		validations += 'Password generated selected!\nPress OK to also display on screen, or Cancel to not show on screen.';
		var displayOnScreen = window.prompt(validations, finalPassword);
		if (displayOnScreen == null) {
			finalPassword = '';
		}
		return finalPassword;
	}
}

// return a password based on characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols
function getPassword(characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols) {
	var randomString = getRandomString(randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols);
	var password = '';
	for (var i = 0; i < characters; i++) {
		password += getRandomCharacter(randomString);
	}
	return password;
}

// make a string of all wanted characters
function getRandomString(number, upper, lower, symbol) {
	return (number ? '0123456789' : '') + (upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') + (lower ? 'abcdefghijklmnopqrstuvwxyz' : '') + (symbol ? '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' : '');
}

// get a random character from argument string, or '' if string empty
function getRandomCharacter(string) {
	return string.length === 0 ? '' : string[Math.floor(Math.random() * string.length)];
}
