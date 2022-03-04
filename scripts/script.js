// Get ASCII Codes from https://www.w3schools.com/charsets/ref_html_ascii.asp

// digits
var ascii_code_digit_0 = 48;
var ascii_code_digit_9 = 57;
var total_digits = ascii_code_digit_9 - ascii_code_digit_0 + 1;

// upper letters
var ascii_code_uppercase_A = 65;
var ascii_code_uppercase_Z = 90;
var total_upper_letters = ascii_code_uppercase_Z - ascii_code_uppercase_A + 1;

// lower letters
var ascii_code_lowercase_a = 97;
var ascii_code_lowercase_z = 122;
var total_lower_letters = ascii_code_lowercase_z - ascii_code_lowercase_a + 1;

// symbols - range 1
var ascii_code_exclamation_mark = 33;
var ascii_code_slash = 47;
// symbols - range 2
var ascii_code_colon = 58;
var ascii_code_at_sign = 64;
// symbols - range 3
var ascii_code_left_square_bracket = 91;
var ascii_code_grave_accent = 96;
// symbols - range 4
var ascii_code_left_curly_brace = 123;
var ascii_code_tilde = 126;

// String.fromCharCode() method to generate a string of 1 character
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// from 0 to 9
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * total_digits) + ascii_code_digit_0);
}

// from A to Z
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * total_upper_letters) + ascii_code_uppercase_A);
}

//  from a to z
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * total_lower_letters) + ascii_code_lowercase_a);
}

// from ! to ~
function getRandomSymbol() {
	var symbols = '';
	// symbols from ! to /
	for (var i = ascii_code_exclamation_mark; i <= ascii_code_slash; i++) {
		symbols = symbols.concat(String.fromCharCode(i));
	}
	// symbols from : to @
	for (var i = ascii_code_colon; i <= ascii_code_at_sign; i++) {
		symbols = symbols.concat(String.fromCharCode(i));
	}
	// symbols from [ to `
	for (var i = ascii_code_left_square_bracket; i <= ascii_code_grave_accent; i++) {
		symbols = symbols.concat(String.fromCharCode(i));
	}
	// symbols from { to ~
	for (var i = ascii_code_left_curly_brace; i <= ascii_code_tilde; i++) {
		symbols = symbols.concat(String.fromCharCode(i));
	}
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Object — an index of functions to hold use preferences
var preferences = {
	passwordLength: 0,
	randomNumbers: true,
	randomUpperLetters: true,
	randomLowerLetters: true,
	randomSymbols: true,
};

// get user preferences
document.getElementById('generate').addEventListener('click', function () {
	// password length
	preferences.passwordLength = window.prompt('Password Length\n\nType a number from 8 to 128 and press OK.', '8');

	// valdiate data
	if (preferences.passwordLength == null) {
		// null
		window.alert('Bye\n');
		return;
	} else if (+preferences.passwordLength >= 8 && +preferences.passwordLength <= 128) {
		// valid
		window.alert('Password length: ' + preferences.passwordLength + ' \n');
	} else {
		// invalid
		while (!(+preferences.passwordLength >= 8 && +preferences.passwordLength <= 128)) {
			if (preferences.passwordLength == null) {
				// cancel
				window.alert('Bye\n');
				return;
			}
			preferences.passwordLength = window.prompt('You entered ' + preferences.passwordLength + '. Do try again.\nType a number from 8 to 128 and press OK.\n', '8');
		}
	}

	// include numbers
	preferences.randomNumbers = window.prompt('Include numbers?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomNumbers == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return;
	} else if (preferences.randomNumbers == 'Y' || preferences.randomNumbers == 'y') {
		// user valid
		preferences.randomNumbers = true;
		window.alert('Okay, including numbers.\n');
	} else if (preferences.randomNumbers == 'N' || preferences.randomNumbers == 'n') {
		// user valid
		preferences.randomNumbers = false;
		window.alert('Okay, no numbers.\n');
	} else {
		// user invalid
		while (preferences.randomNumbers !== 'Y' && preferences.randomNumbers !== 'y' && preferences.randomNumbers !== 'N' && preferences.randomNumbers !== 'n') {
			if (preferences.randomNumbers == null) {
				// user pressed cancel
				window.alert('Bye\n');
				return;
			}
			preferences.randomNumbers = window.prompt('You entered ' + preferences.randomNumbers + '. Do try again.\nInclude numbers?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include uppercase letters
	preferences.randomUpperLetters = window.prompt('Include uppercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomUpperLetters == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return;
	} else if (preferences.randomUpperLetters == 'Y' || preferences.randomUpperLetters == 'y') {
		// user valid
		preferences.randomUpperLetters = true;
		window.alert('Okay, include uppercase letters.\n');
	} else if (preferences.randomUpperLetters == 'N' || preferences.randomUpperLetters == 'n') {
		// user valid
		preferences.randomUpperLetters = false;
		window.alert('Okay, no uppercase letters.\n');
	} else {
		// user invalid
		while (preferences.randomUpperLetters !== 'Y' && preferences.randomUpperLetters !== 'y' && preferences.randomUpperLetters !== 'N' && preferences.randomUpperLetters !== 'n') {
			if (preferences.randomUpperLetters == null) {
				// user pressed cancel
				window.alert('Bye\n');
				return;
			}
			preferences.randomUpperLetters = window.prompt('You entered ' + preferences.randomUpperLetters + '. Do try again.\nInclude uppercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include lowercase letters
	preferences.randomLowerLetters = window.prompt('Include lowercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomLowerLetters == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return;
	} else if (preferences.randomLowerLetters == 'Y' || preferences.randomLowerLetters == 'y') {
		// user valid
		preferences.randomLowerLetters = true;
		window.alert('Okay, include lowercase letters.\n');
	} else if (preferences.randomLowerLetters == 'N' || preferences.randomLowerLetters == 'n') {
		// user valid
		preferences.randomLowerLetters = false;
		window.alert('Okay, no lowercase letters.\n');
	} else {
		// user invalid
		while (preferences.randomLowerLetters !== 'Y' && preferences.randomLowerLetters !== 'y' && preferences.randomLowerLetters !== 'N' && preferences.randomLowerLetters !== 'n') {
			if (preferences.randomLowerLetters == null) {
				// user pressed cancel
				window.alert('Bye\n');
				return;
			}
			preferences.randomLowerLetters = window.prompt('You entered ' + preferences.randomLowerLetters + '. Do try again.\nInclude lowercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include symbols
	preferences.randomSymbols = window.prompt('Include symbols?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomSymbols == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return;
	} else if (preferences.randomSymbols == 'Y' || preferences.randomSymbols == 'y') {
		// user valid
		preferences.randomSymbols = true;
		window.alert('Okay, include symbols.\n');
	} else if (preferences.randomSymbols == 'N' || preferences.randomSymbols == 'n') {
		// user valid
		preferences.randomSymbols = false;
		window.alert('Okay, no symbols.\n');
	} else {
		// user invalid
		while (preferences.randomSymbols !== 'Y' && preferences.randomSymbols !== 'y' && preferences.randomSymbols !== 'N' && preferences.randomSymbols !== 'n') {
			if (preferences.randomSymbols == null) {
				// user pressed cancel
				window.alert('Bye\n');
				return;
			}
			preferences.randomSymbols = window.prompt('You entered ' + preferences.randomSymbols + '. Do try again.\nInclude symbols?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	document.getElementById('result').innerHTML = getPassword(preferences.passwordLength, preferences.randomNumbers, preferences.randomUpperLetters, preferences.randomLowerLetters, preferences.randomSymbols);
	window.alert('Generated!');
});

// returns a password based on the argument of number passwordLength, boolean randomNumbers, boolean randomUpperLetters, boolean randomLowerLetters, boolean randomSymbols
function getPassword(passwordLength, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols) {
	var randomString = getRandomString(randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols);
	var password = '';
	for (var i = 0; i < passwordLength; i++) {
		password += getRandomCharacter(randomString);
	}
	if (password.length === 0) {
		password += "You didn't choose any character types (numbers, letters, symbols). Try again?";
	}
	return password;
}

// returns one random character based on the booleans that are true
function getRandomCharacter(randomString) {
	// user has chosen no character types
	if (randomString.length === 0) {
		return '';
	} else {
		return randomString[Math.floor(Math.random() * randomString.length)];
	}
}

// make a string of all wanted characters
function getRandomString(randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols) {
	var randomString = '';
	var i = 0;

	if (randomNumbers === true) {
		randomString += '0123456789';
	}
	if (randomUpperLetters === true) {
		randomString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (randomLowerLetters === true) {
		randomString += 'abcdefghijklmnopqrstuvwxyz';
	}
	if (randomSymbols === true) {
		randomString += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	}

	return randomString;
}
