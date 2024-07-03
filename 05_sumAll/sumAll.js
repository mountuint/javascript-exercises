const sumAll = function (firstNum, lastNum) {
  if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
    return "ERROR";
  }

  if (firstNum < 0 || lastNum < 0) {
    return "ERROR";
  }

  let startNum = firstNum;
  let endNum = lastNum;

  if (firstNum > lastNum) {
    startNum = lastNum;
    endNum = firstNum;
  }

  let total = 0;
  for (let i = startNum; i <= endNum; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
