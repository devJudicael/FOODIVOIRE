const prompt = require("prompt-sync")();

let nombre= prompt("entrer un nombre : ");

nombre = parseFloat (nombre );

nombre%2 == 0 ? console.log ("Votre nombre est pair ") : console.log ("Votre nombre est impair")



