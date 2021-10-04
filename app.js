const alfabetoAlien = "zyxwvutsrqponmlkjihgfedcba";

let humanWords = [
  "miel",
  "extraterrestre",
  "al",
  "automovil",
  "auto",
  "revestir",
];
let alienWords = [];
const alfabetoTerricola = Array.from(
  { length: alfabetoAlien.length },
  (letter, i) => {
    return String.fromCharCode(i + 65).toLowerCase();
  }
).join("");

let alien = Array.from(alfabetoAlien),
  terricola = Array.from(alfabetoTerricola);

let diccToAlien = terricola.map((letter, i) => {
  return { [letter]: alien[i] };
});
let diccToHuman = alien.map((letter, i) => {
  return { [letter]: terricola[i] };
});

diccToHuman = Object.assign({}, ...diccToHuman);
diccToAlien = Object.assign({}, ...diccToAlien);

const translateTo = (especie, orden_alfabeto) => {
  return especie.map((palabra) => {
    return Array.from(palabra)
      .map((w) => {
        return orden_alfabeto[w];
      })
      .join("");
  });
};

alienWords = translateTo(humanWords, diccToAlien);
console.log(alienWords);
console.log(translateTo(alienWords, diccToHuman))