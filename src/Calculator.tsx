import { useState } from "react";
import { IOperator, OperatorFactory } from "./abstact";

const Calculator = () => {
  const [firstOperand, setFirstOperand] = useState<number | null>();
  const [operator, setOperator] = useState<string | null>();
  const [secondOperand, setSecondOperand] = useState<number | null>();
  const [result, setResult] = useState<number | null>();

  const onOperandClick = (e: any) => {
    const value = Number(e.target.textContent);

    if (!firstOperand) {
      setFirstOperand(value);
    }

    if (firstOperand && operator) {
      setSecondOperand(value);
    }
  };

  const onOperatorClick = (e: any) => {
    const operator = e.target.textContent;
    if (firstOperand) {
      setOperator(operator);
    }
  };

  const onEqualClick = () => {
    if (firstOperand && operator && secondOperand) {
      const operatorClass: IOperator | undefined =
        new OperatorFactory().createOperator(operator);

      if (operatorClass) {
        setResult(operatorClass.getResult(firstOperand, secondOperand));
      }
    }
  };

  const onClearClick = () => {
    setFirstOperand(null);
    setOperator(null);
    setSecondOperand(null);
    setResult(null);
  };

  return (
    <div>
      <div>
        {firstOperand} {operator} {secondOperand} = {result}
      </div>
      <div>
        <button onClick={onOperandClick}>1</button>
        <button onClick={onOperandClick}>2</button>
        <button onClick={onOperandClick}>3</button>
      </div>
      <div>
        <button onClick={onOperandClick}>4</button>
        <button onClick={onOperandClick}>5</button>
        <button onClick={onOperandClick}>6</button>
      </div>
      <div>
        <button onClick={onOperandClick}>7</button>
        <button onClick={onOperandClick}>8</button>
        <button onClick={onOperandClick}>9</button>
      </div>
      <div>
        <button onClick={onOperatorClick}>+</button>
        <button onClick={onOperatorClick}>-</button>
        <button onClick={onOperatorClick}>*</button>
        <button onClick={onOperatorClick}>/</button>
        <button onClick={onEqualClick}>=</button>
        <button onClick={onClearClick}>Clear</button>
      </div>
    </div>
  );
};
export default Calculator;
