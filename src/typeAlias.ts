/**
 * Type Alias
 */

// type alias in object

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string
  },
  gender: 'male' | 'female';
  contactNo: string;
  address: {
    division: string;
    city: string
  }
}

const user1: User = {
  id: 123,
  name: {
    firstName: 'Mr.',
    lastName: 'X'
  },
  gender: 'male',
  contactNo: '0177',
  address: {
    division: 'Chittagong',
    city: 'Chittagong'
  }
}


const user2: User = {
  id: 123,
  name: {
    firstName: 'Ms.',
    lastName: 'y'
  },
  gender: 'male',
  contactNo: '0199',
  address: {
    division: 'Dhaka',
    city: 'Dhaka'
  }
}

// type alice in function

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => num1 + num2;