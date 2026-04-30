/**
 * Function --> arrow function & normal function
 */

function addNormal(num1: number, num2: number): number {
  return num1+num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// function in object ==> method

const poorUser = {
  name: 'mezba',
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  }
}

poorUser.addBalance(100000);

const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((elem: number): number => elem * elem);