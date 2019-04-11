const containerOperate = require('../operate/containerOperate');
const Calculator = require('../calculator');

const calculate  = new Calculator();

module.exports = async (context) => {

    let multi        = calculate.calculate(new containerOperate.Mul(), context.first, context.second);
    let div          = calculate.calculate(new containerOperate.Div(), context.first, context.second);
    let add          = calculate.calculate(new containerOperate.Add(), context.first, context.second);
    context.body     = {
        Multiplication: multi,
        Division  : div,
        Addition  : add
    }

}