let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
 
 if(
  userObj.hasOwnProperty('Alan')
  &&userObj.hasOwnProperty('Jeff')
  &&'Sarah' in userObj
  &&'Ryan' in userObj
 ) {
 return true;
 }
 return false; 
  //les {} autour de return true pour l'exétucion si puis reste de la foncction, sous entendu si les condition ne sont pas respecté et que le if ne se déclanche pas, false
  // Only change code above this line
}

console.log(isEveryoneHere(users));

