// Non Primivite datatypes = array, object, tuple

let bazarList: string[] = ['eggs', 'milk', 'sugar'];
//bazarList.push(12); Can not assign

let mixedArr: (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2];
// mixedArr.push(11); Can assign
// mixedArr.push(true);

let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let shafkatNameAndRoll: [string, number] = ['Shafkat', 79];

let destination: [string, string, number] = ['Dhaka', 'Chittagong', 3];


// reference type: object

// const user: {
//   // organization: string;
//   organization: "Shafkat AI Solution";  // value => type : literal type
//   firstName: string;
//   middleName?: string;  // optional type
//   lastName: string;
//   isMarried: boolean
// } = {
//   organization: 'Shafkat AI Solution',
//   firstName: 'Shafkat',
//   middleName: 'Ahmed',
//   lastName: 'Upol',
//   isMarried: true
// }

const user: {
  // organization: string;
  readonly organization: string;  // access modifier
  firstName: string;
  middleName?: string;  // optional type
  lastName: string;
  isMarried: boolean
} = {
  organization: 'Shafkat AI Solution',
  firstName: 'Shafkat',
  middleName: 'Ahmed',
  lastName: 'Upol',
  isMarried: true
}
// user.organization = "Shafkat AI and Software Solution"; can not re assign because organization type was set to readonly.
console.log(user);