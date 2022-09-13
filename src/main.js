var helloWorld = 'hello world';
console.log(helloWorld);
var n = 0;
console.log('n ' + n + ' ' + typeof n);
var x = 8;
var imie = 'imie';
var nazwisko = 'nazwisko';
var tekst = "moje imie to ".concat(imie, ", a nazwisko to ").concat(nazwisko);
console.log("".concat(imie, " = ").concat(typeof imie));
console.log("".concat(nazwisko, " = ").concat(typeof nazwisko));
console.log("".concat(tekst, " = ").concat(typeof tekst));
var posesja = 17;
var metraz = 232.33;
var wartosc = 2332222;
console.log("Wartosc domu przy ulicy Lesna ".concat(posesja, " o metrazu ").concat(metraz, " m2 wynosi ").concat(wartosc, " zl"));
var binary = 61;
console.log(binary);
var man;
var woman;
var aga = 'man';
if (aga === 'woman') {
    woman = true;
    man = false;
}
else {
    woman = false;
    man = true;
}
console.log("man: ".concat(man, ", woman: ").concat(woman));
