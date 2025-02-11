let woerter = ["Apfel", "Banane", "Kirsche", "Mango", "Ananas"];

let gesamtlaenge = 0;
for (wort of woerter) {
  console.log(`${wort} hat ${wort.length} Buchstaben`);
  gesamtlaenge += wort.length;
}
console.log(`Gesamtlänge aller Wörter: ${gesamtlaenge}`);
