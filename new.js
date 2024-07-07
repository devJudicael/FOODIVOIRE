const prompt = require ("prompt-sync")();




let note1 = prompt("entrer le premier nombre : ");
let note2 = prompt("entrer le deuxieme nombre : ");

note1 = parseFloat(note1);
note2 = parseFloat(note2);

let somme = note1 + note2 ;

console.log ("la somme de vos nombres est : " + somme);