const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let i = 0
  for(let user in usersObj) {
    if(usersObj[user].online === true)
      i++ ;
  }
  return i
  //première tentative avec users à la place usersObj, ça me donnait las même résultats mais l'exo n'était pas validé, je ne sais pas pourquoi
  //effectivement sinon c'est juste valable pour l'objet users et la fonction ne sert à rien
  // Only change code above this line
}

console.log(countOnline(users));