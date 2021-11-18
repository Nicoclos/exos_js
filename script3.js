let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramide(floors){
  i = floors
  hashtag = 1
  while (i > 0){
    console.log((" ").repeat(i) + ("#").repeat(hashtag));
    i -= 1
    hashtag += 1
  }
}
pyramide(floors)