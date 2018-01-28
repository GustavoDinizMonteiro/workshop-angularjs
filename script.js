// Declaracao de variaveis
var number = 5;
var name = 'baiano';
var things = [name, number];
var what = undefined;

// Print
console.log(name, number);
console.log(what);

// Estruturas condicionais
if (number == '5' || number === 5) { // whaaaaaaaaaat ?
    console.log(number);
} else if (name !== 'baiano') {
    console.log('nao deveria mostrar isso');
} else {
    console.log('opa');
}

// Estruturas de repeticao
for (var i = 0; i < things.length; i++) {
    console.log(things[i]);
}

for (var i in things) {
    console.log(things[i]);
}

// a maneira que eu mais gosto.
things.forEach(thing => console.log(thing));

// e por ultimo o while
var i = 0;
while (i < things.length) {
    console.log(things[i++]);
}