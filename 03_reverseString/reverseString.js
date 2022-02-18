const reverseString = function(string) {
  //  string += "";
    let stringArray = string.split("");
    let returnString = '';
    for (i = 0; i < stringArray.length; i++){
        returnString =  stringArray[i] + returnString;
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
