function forma() {

var x = document.querySelector("#vrata input").value;
if(x === "923") {
alert("Vrata su se otključala");
document.write("KRAJ");
} else {
alert("Pogrešna šifra");
}
}

function forma2() {

var x = document.querySelector("#sifra input").value;
if(x === "847") {
alert("Šifra za vrata se nalazi u donjem levom uglu");
} else {
alert("Pogrešna šifra");
}
}
