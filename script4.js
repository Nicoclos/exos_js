const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

annee = (entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980));

console.log(annee);

names = (entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`))

console.log(names)

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("\nQuel âge a / aurait chaque inventeur aujourd'hui ?\n\n");
current_year = 2021
birth_year = (entrepreneurs.map(entrepreneurs => entrepreneurs.year))
for (i = 0; i < birth_year.length; i++)
{
  console.log((names[i] + " a / aurait ") + (current_year - birth_year[i]) + " ans.");
}

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("\nTrions les entrepreneurs par ordre alphabétique par leur nom de famille :\n\n");
entrepreneurs.sort(function (a , b) 
{
    return a.last.localeCompare(b.last)
})
console.log(entrepreneurs)