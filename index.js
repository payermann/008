let woerter = ["Apfel", "Banane", "Kirsche", "Mango", "Ananas"];

let gesamtlaenge = 0;
for (wort of woerter) {
  console.log(`${wort} hat ${wort.length} Buchstaben`);
  gesamtlaenge += wort.length;
}
console.log(`Gesamtlänge aller Wörter: ${gesamtlaenge}`);

let zahlen = [4, 8, 15, 16, 23, 42];

let durchschnitt = 0;
let summe = 0;

for (zahl of zahlen) {
  summe += zahl;
}
console.log(`Summe: ${summe}`);
console.log(`Durschnitt: ${Math.round((summe / zahlen.length) * 100) / 100}`);
