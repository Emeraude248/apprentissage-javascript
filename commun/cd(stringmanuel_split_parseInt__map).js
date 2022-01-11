function digitize(n) {
    var nchar = '' + n;
    //n mis dans une chaîne de carctères = string
    var tab = nchar.split('');
    //split transforme par défault en tableau
    for(i=0; i<tab.length; i++){
      tab[i] = Number.parseInt(tab[i]);
      //number possible à retirer ?
    }
    return tab;
  }

  /* version courte :
  return String(n).split('').map(Number);

  map assez complexe à utiliser
  */