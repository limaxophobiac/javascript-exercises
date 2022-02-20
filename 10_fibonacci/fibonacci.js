const fibonacci = function(a) {
    a = Number(a);
    if (a < 0){
        return "OOPS";
    }
    let fibArray = [1, 1];
    for (i = 2; i < a; i++){
        let fibNext = fibArray[i-2] + fibArray[i-1];
        fibArray.push(fibNext);
    }
    return fibArray[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
