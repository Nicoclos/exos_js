let nombre = prompt("De quel nombre doit-on calculer la factorielle ?");

function facto(nombre){
  i=1;
  somme = 1;
  while (i<=nombre){
    somme *=i;
    i+=1;
  }
 console.log("Voici la factorielle de " + nombre + ": " + somme);
}
facto(nombre);