class Division {
    operate(firstNumber, secondNumber) {
        if(secondNumber == 0) {
            throw new Error('secondNumber can\'t = 0');
        }
        else {
            return firstNumber/secondNumber;
        }
    }
}

module.exports = Division;