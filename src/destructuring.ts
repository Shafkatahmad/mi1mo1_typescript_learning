/**
 * object destructuring
 * array destructuring
 */

const user = {
  id: 123,
  name: {
    firstName: 'Shafkat',
    middleName: 'Ahmed',
    lastName: 'Upol'
  },
  gender: 'male',
  favouriteColor: 'black'
}

// const myMiddleName = user.name.middleName;

const {favouriteColor: myFavouriteColor, name : {middleName: myMiddleName}} = user;
console.log(myMiddleName);


// array
const friends = ['Karim', 'Rahim', 'Mahim'];

// const myBestFriend = friends[1];
const [, myBestFriend, ] = friends;
console.log(myBestFriend);