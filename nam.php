<?php

    class Calculator{
        public function calculate (Operator $operator, float $firstNumber, float $secondNumber){
            return $operator->operate($firstNumber, $secondNumber);
        }
    }

    interface Operator{
        public function operate(float $firstNumber, float $secondNumber);
    }

    class Add implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
            return $firstNumber + $secondNumber;
        }
    }

    class Minus implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
            return $firstNumber - $secondNumber;
        }
    }

    class Multiply implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
            return $firstNumber * $secondNumber;
        }
    }

    class Divide implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
        	try{
            	if ($secondNumber == 0){
                	throw new Exception("Fail");
            	}
            	else{
                	return $firstNumber / $secondNumber;
            	}
            }
            catch (Exception $e){
        		echo $e->getMessage();
    		}
        }
    }

    $calculator = new Calculator;

    echo $calculator->calculate(new Add(), 5, 5)."<br>";
    echo $calculator->calculate(new Minus(), 5, 5)."<br>";
    echo $calculator->calculate(new Multiply(), 5, 5)."<br>";
    echo $calculator->calculate(new Divide(), 5, 0);

?>
