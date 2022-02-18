const removeFromArray = function() {
    let args = Array.from(arguments);
    let returnArray = [];
        for (const elem of args[0]){
            if (!args.includes(elem)){
                returnArray.push(elem);
            }
        }
    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
