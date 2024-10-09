export interface IOperator {
  getResult(firstOperator: number, secondOperator: number): number;
}

export interface IFactory {
  createOperator(operator: string): IOperator | undefined;
}

export class AdditionOperator implements IOperator {
  public getResult(firstOperator: number, secondOperator: number): number {
    return firstOperator + secondOperator;
  }
}

export class SubstractOperator implements IOperator {
  public getResult(firstOperator: number, secondOperator: number): number {
    return firstOperator - secondOperator;
  }
}

export class MultiplicationOperator implements IOperator {
  public getResult(firstOperator: number, secondOperator: number): number {
    return firstOperator * secondOperator;
  }
}

export class DivsionOperator implements IOperator {
  public getResult(firstOperator: number, secondOperator: number): number {
    return firstOperator / secondOperator;
  }
}

export class OperatorFactory implements IFactory {
  public constructor() {}

  public createOperator(operator: string) {
    switch (operator) {
      case "+":
        return new AdditionOperator();
      case "-":
        return new SubstractOperator();
      case "*":
        return new MultiplicationOperator();
      case "/":
        return new DivsionOperator();
      default:
        return;
    }
  }
}
