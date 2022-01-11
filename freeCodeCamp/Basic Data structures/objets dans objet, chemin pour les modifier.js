let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  //objet dans objet car data contient des propriétés (totalUsers et online) 
  //data est à la fois propritété de userActivity et objet de totalUsers et online
  
  // Only change code below this line
  userActivity.data.online = 45
  //le point pour séparer les éléments du chemin (aucune idées de la validité des termes utilisés ^^)
  // Only change code above this line
  
  console.log(userActivity);