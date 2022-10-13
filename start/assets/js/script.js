//Primo step
var frase = ('Sto imparando JavaScript');

var maiuscolo = frase.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiuscolo;

var minuscolo = frase.toLowerCase();
document.getElementById('minuscola').innerHTML = minuscolo;

var str = frase.split("");
document.getElementById('strArray').innerHTML = str;

var trim = frase.trim().charAt(2,23,14,18);
document.getElementById('estraiCaratteri').innerHTML = trim ;

var nuovaStringa = frase.concat(' JS');
document.getElementById('concatena').innerHTML = nuovaStringa ;

var sub = frase.substring(5, 9);
document.getElementById('estraiStringa').innerHTML = sub ;

//Secondo step
const array = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];
document.getElementById('array').innerHTML = array;

document.getElementById('lunghezza').innerHTML = array.length;

document.getElementById('elemento').innerHTML = array[2];

document.getElementById('ultimo').innerHTML = array.slice(3,4);

array.splice( 2, 1, 'Massimo');
document.getElementById('modificato').innerHTML = array;

//Terzo step
const calcolaAnni = function(compleanno){
    return 2022 - compleanno
}
const anni = [2001, 1990, 1987, 2018, 2010];
const eta1 = calcolaAnni(anni[0]);
const eta2 = calcolaAnni(anni[1]);
const eta3 = calcolaAnni(anni[2]);
const eta4 = calcolaAnni(anni[3]);
const eta5 = calcolaAnni(anni[4]);

document.getElementById('eta1').innerHTML += eta1 + 'anni';
document.getElementById('eta2').innerHTML += eta2 + 'anni';
document.getElementById('eta3').innerHTML += eta3 + 'anni';
document.getElementById('eta4').innerHTML += eta4 + 'anni';
document.getElementById('eta5').innerHTML += eta5 + 'anni';
document.getElementById('arrayEta').innerHTML += `${eta1},${eta2},${eta3},${eta4},${eta5}`;

//Quarto step
const animali = ['coniglio', 'cane', 'gatto', 'criceto'];

document.getElementById('intero').innerHTML = animali;

animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali;

animali.pop();
document.getElementById('estratto').innerHTML = animali;

document.getElementById('verifica1').innerHTML = animali.includes('cane');
document.getElementById('verifica2').innerHTML = animali.includes('tigre');