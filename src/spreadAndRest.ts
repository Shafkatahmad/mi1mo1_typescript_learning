/**
 * spread operator
 */

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ['Mr. Smart', 'Mr. very smart'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);


const user = {user: "Mezba", phoneNo: "0170000"};

const otherInfo = {hobby: 'outing', favoutiveColor: 'Black'};

const userInfo = {...user, ...otherInfo};
console.log(userInfo);


// rest operator

const sendInvite = (...friends: string[]) => {
  // console.log(`Sent Invitation to ${friend1}`);
  // console.log(`Sent Invitation to ${friend2}`);
  // console.log(`Sent Invitation to ${friend3}`);

  friends.forEach((friend: string) => console.log(`Sent invitation to ${friend}`))
}

sendInvite('pintu', 'chintu', 'bulbul', 'mezba')