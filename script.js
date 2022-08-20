var lengthSlider = document.getElementById("length_slider");
var textCharacters = document.getElementById("text_characters");

var cbLowerCase = document.getElementById("cb_lowercase");
var cbUpperCase = document.getElementById("cb_uppercase");
var cbNumbers = document.getElementById("cb_numbers");
var cb_symbols = document.getElementById("cb_symbols");

var passwordContainer = document.getElementById("password_container");

setCharacters(lengthSlider.value);

setPassword();

lengthSlider.oninput = function () {
    setCharacters(this.value);

    setPassword();
}

// when passwordContainer is clicked, copy to clipboard
passwordContainer.addEventListener("click", function () {
    // copy text to clipboard
    // var text = passwordContainer.innerText;
    // var textArea = document.createElement("textarea");
    // textArea.value = text;
    // document.body.appendChild(textArea);
    // textArea.select();
    // document.execCommand("copy");
    // textArea.remove();

    // passwordContainer.select();
    // passwordContainer.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordContainer.innerText);

});

function setCharacters(value) {
    textCharacters.innerHTML = `${value} characters`;
}

function onCheckboxChange() {
    setPassword();
}

function setPassword() {
    var length = lengthSlider.value;

    var includeLower = cbLowerCase.checked;
    var includeUpper = cbUpperCase.checked;
    var includeNumbers = cbNumbers.checked;
    var includeSymbols = cb_symbols.checked;

    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "012345678901234567890";
    var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var password = "";
    var allCharacters = "";

    if (includeLower) {
        allCharacters += lowerLetters;
    }
    if (includeUpper) {
        allCharacters += capitalLetters;
    }
    if (includeNumbers) {
        allCharacters += numbers;
    }
    if (includeSymbols) {
        allCharacters += specialCharacters;
    }


    for (var i = 0; i < length; i++) {
        var character = allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        password += character;
    }

    passwordContainer.innerHTML = password;
}