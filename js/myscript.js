const nome = prompt ('Inserisci il tuo nome');
// console.log(nome);

const cognome = prompt('Inserisci il tuo cognome');
// console.log(cognome);

const colore = prompt('Inserisci il tuo colore preferito');
// console.log(colore);

const numero = 5;
// console.log(numero);

let passwordGen;
passwordGen = nome + cognome + colore + numero;
// console.log(passwordGen);

document.getElementById('password').innerHTML = passwordGen;