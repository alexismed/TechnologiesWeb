// fonctionne pour le démarrage 
function start(){
	// change le lien de wikipedia
	let lien = document.querySelector("a");	
	lien.href = "https://fr.wikipedia.org/";

	// change le texte à côté des input radio
	let radio = document.getElementById("ch1");
	let nombre = 3;
	while(nombre>0)
	{
		radio.nextSibling.data = radio.value;
		radio = radio.nextSibling.nextSibling;
		nombre--;
	}

	// change le texte de "Une case à cocher"
	let mute = document.getElementById("muteBox");
	mute.previousSibling.data = "Mute";

	// change la valeur max du volume 
	let range = document.querySelector("input[type='range']");
	range.max = 100;
	range.value = 50;

	// affiche la valeur du volume
	range.nextSibling.nextSibling.nextSibling.data = range.value;
	console.log("Valeur max = " + range.max);

	// ajoute une image à "liens et images"
	let image = document.createElement("img");
	image.setAttribute("src", "images/UPHF_logo.png");
	image.setAttribute("width", "200px");
	image.setAttribute("alt", "Logo UPHF");
	document.body.appendChild(image);
	let divLiens = document.querySelector("div");
	divLiens.appendChild(image);

	// donne une valeur initiale aux barres de progression
	let barreA = document.querySelector("progress");
	let barreB = document.querySelector("meter");
	barreA.value = 0;
	barreB.value = 0;

	// cache le contenu au début
	let divs = document.getElementsByTagName("div");
	for(let i=0;i<divs.length;i++)
	{
		divs[i].style = "display: none";
	}

	// enleve nos choix
	let checks = document.getElementsByTagName("input");
	for(let i=0;i<3;i++)
	{
		checks[i].checked = false;
	}	
}

function verifierTexte(){
	let input = document.querySelector("input[type='text']");

	// si le texte est correct, nous sortons de la fonction
	if(input.value == "Oui" || input.value == "Non")
		return;
	input.value = "Il faut mettre Oui ou Non";
}

// change l'étiquette du volume
function auChoix(choix){
	let range = document.querySelector("input[type='range']");
	range.nextSibling.data = "Volume " + choix.value;
}

// si on choisi Mute, volume est desactivé 
function mute(choix){
	let range = document.querySelector("input[type='range']");
	if(choix.checked)
	{
		range.disabled = true;
		return;
	}
	range.disabled = false;
}

function afficherVolume(){
	let range = document.querySelector("input[type='range']");
	range.nextSibling.nextSibling.nextSibling.data = range.value;
}

function afficherAnnee(date){
	// la valeur de l'input c'est un string
	// où les 4 premiers caractères constituent l'année  
	console.log("Annee = " + date.value.substring(0,4));
}

// chaque seconde, les barres progressent 5%
function barres(){
	let barreA = document.querySelector("progress");
	let barreB = document.querySelector("meter");
	
	// si on arrive à la valeur max, on s'arrête 
	if(barreA.value == barreA.max)
		clearInterval(intID);

	// obtenir 5% de chaque barre 
	let stepA = barreA.max / 20;
	let stepB = barreB.max / 20;

	barreA.value += stepA;
	barreB.value += stepB;
}

function afficherDiv(choix){
	let divs = document.getElementsByTagName("div");
	let divChoisi = divs[choix.value];
	if(choix.checked)
	{
		divChoisi.style = "display: contents";
		return;
	}
	divChoisi.style = "display: none";

}

// variable globale
// les barres progressent toutes les 1000 ms
var intID = setInterval(barres, 1000);