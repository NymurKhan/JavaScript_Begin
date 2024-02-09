/*function signature/sample */
function checkName(name) {

    console.log(typeof(name));

    if (typeof name == "string") {
        let lowerCase = name.toLowerCase();
        // console.log(lowerCase);

        let lastLetter = lowerCase.charAt(name.length - 1);
        // console.log(lastLetter);

        if (lastLetter == "a" || lastLetter == "y" || lastLetter == "i" || lastLetter == "e" || lastLetter == "o" || lastLetter == "u" || lastLetter == "w") {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
    else {
        return "invalid";
    }


}
// console.log(checkName('Nymur'));