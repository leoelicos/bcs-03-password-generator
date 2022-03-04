// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Object preferences — an index of functions to hold user preferences
var preferences = {
	passwordLength: 0,
	randomNumbers: true,
	randomUpperLetters: true,
	randomLowerLetters: true,
	randomSymbols: true,
};

// get user preferences
function generatePassword() {
	// password length
	preferences.passwordLength = window.prompt('Password Length\n\nType a number from 8 to 128 and press OK.', '8');

	// valdiate data
	if (preferences.passwordLength == null) {
		// null
		window.alert('Bye\n');
		return '';
	} else if (+preferences.passwordLength >= 8 && +preferences.passwordLength <= 128) {
		// valid
		window.alert('Password length: ' + preferences.passwordLength + ' \n');
	} else {
		// invalid
		while (!(+preferences.passwordLength >= 8 && +preferences.passwordLength <= 128)) {
			if (preferences.passwordLength == null) {
				// cancel
				window.alert('Bye\n');
				return '';
			}
			preferences.passwordLength = window.prompt('You entered ' + preferences.passwordLength + '. Do try again.\nType a number from 8 to 128 and press OK.\n', '8');
		}
	}

	// include numbers
	preferences.randomNumbers = window.prompt('Include numbers?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomNumbers == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return '';
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
				return '';
			}
			preferences.randomNumbers = window.prompt('You entered ' + preferences.randomNumbers + '. Do try again.\nInclude numbers?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include uppercase letters
	preferences.randomUpperLetters = window.prompt('Include uppercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomUpperLetters == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return '';
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
				return '';
			}
			preferences.randomUpperLetters = window.prompt('You entered ' + preferences.randomUpperLetters + '. Do try again.\nInclude uppercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include lowercase letters
	preferences.randomLowerLetters = window.prompt('Include lowercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomLowerLetters == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return '';
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
				return '';
			}
			preferences.randomLowerLetters = window.prompt('You entered ' + preferences.randomLowerLetters + '. Do try again.\nInclude lowercase letters?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}

	// include symbols
	preferences.randomSymbols = window.prompt('Include symbols?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');

	if (preferences.randomSymbols == null) {
		// user cancel
		window.alert('Bye ✌🏻\n');
		return '';
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
				return '';
			}
			preferences.randomSymbols = window.prompt('You entered ' + preferences.randomSymbols + '. Do try again.\nInclude symbols?\n\nType Y for Yes and N for No.\nEnter your choice and press OK, or cancel', 'Y');
		}
	}
	var finalPassword = getPassword(preferences.passwordLength, preferences.randomNumbers, preferences.randomUpperLetters, preferences.randomLowerLetters, preferences.randomSymbols);

	return finalPassword;
}

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
