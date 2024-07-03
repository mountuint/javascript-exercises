const removeFromArray = function(arr, ...num) {
    return arr.filter(ele => ![...num].includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
