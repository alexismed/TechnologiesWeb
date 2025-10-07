function convertir(){
	let euro = document.getElementById("idEuro");
	let us = parseFloat(euro.value) * 1.01;
	let aus = parseFloat(euro.value) * 1.47;

	// avoir juste deux décimales 
	us = Math.round(us * 100) /100;
	aus = Math.round(aus * 100) /100;
	
	let inputUs = document.getElementById("idUs");
	let inputAus = document.getElementById("idAus");
	inputUs.value = us;
	inputAus.value = aus;
}