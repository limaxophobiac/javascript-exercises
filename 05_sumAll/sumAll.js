const sumAll = function(int1, int2) {
    if (typeof int1 != 'number' || typeof int2 != 'number' || int1 < 0 || int2 < 0){
        return 'ERROR';
    }

    if (int1 > int2){
        let holdInt = int1;
        int1 = int2;
        int2 = holdInt;
    }
    let returnInt = 0;
    for (i = int1; i <= int2; i++){
        returnInt += i;
    }

    return returnInt;
};

// Do not edit below this line
module.exports = sumAll;
