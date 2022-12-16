function eq(fNum, sNum, operand) {
  if (operand === "+") {
    return fNum + sNum;
  } else if (operand === "*") {
    return fNum * sNum;
  } else if (operand === "/") {
    return fNum / sNum;
  } else if (operand === "-") {
    return fNum - sNum;
  }
}

export default eq;
