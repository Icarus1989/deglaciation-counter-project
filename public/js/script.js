var firebaseConfig = {
	apiKey: "AIzaSyCQhYv_UM0Iiss6ZO2q0tyAYaaXcI9VO6Q",
	authDomain: "deglaciation-counter-pro-630d3.firebaseapp.com",
	projectId: "deglaciation-counter-pro-630d3",
	storageBucket: "deglaciation-counter-pro-630d3.appspot.com",
	messagingSenderId: "1093478630926",
	appId: "1:1093478630926:web:de3934b074d2e1e5d05e5f",
	measurementId: "G-RQJF6G11TF"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let parent = document.querySelector('.parent');
let titleG = document.querySelector('#titleG');
let titleT = document.querySelector('#titleT');
let buttons = document.querySelector('.buttons');
let upbutton = document.querySelector('#upbutton');
let downbutton = document.querySelector('#downbutton');
let counter = document.querySelector('#counter');
let counterValue = 0;
let bigWheel = document.querySelector('.thermostatDial');
let wheel = document.querySelector('#wheel');
let wheelRadius = Number((wheel.getBoundingClientRect().width).toFixed(0)) / 2;
let radiusThermostat;
let average = document.querySelector('#average');
let tempLabel = document.querySelector('#tempLabel');
let averageTemperature = tempLabel.textContent;
let progressbar = document.querySelector('#progressbar');
let letterOglobal = document.querySelector('#letterO');
let radius; //raggio termostato per calcolo coordinate rotella
let xCentral;
let yCentral;
// ------ canvas / sketch.js variables ------
const section = Number((document.documentElement.clientHeight / 18).toFixed(0)); // lato IceCube
let verticalBlocks = Math.round((document.documentElement.clientHeight / 3.5) / (section)); //numero di cubi
let activeIce = false;
let glaciarIndex = -1;
let glaciarIndexTwo = -1;
let glaciarIndexThree = -1;
let stopIce = false;
let startMelting = false; // per timeout sciogliemento
let alpha = 200; //trasparenza per elements del canvas
let breakSignal = false;
// ------ canvas / sketch.js variables ------

parent.style.height = document.documentElement.clientHeight + 'px';
bigWheel.style.position = 'absolute';
bigWheel.style.left = document.documentElement.clientWidth / 2 - (Number((bigWheel.getBoundingClientRect().width).toFixed(0))) / 2 + 'px';
bigWheel.style.top = document.documentElement.clientHeight / 2 - (Number((bigWheel.getBoundingClientRect().height).toFixed(0))) / 2 + 'px';
wheel.style.position = 'absolute';
radiusThermostat = Number((bigWheel.getBoundingClientRect().x).toFixed(2)) - document.documentElement.clientWidth / 2;
radius = Number((bigWheel.getBoundingClientRect().x).toFixed(2)) - document.documentElement.clientWidth / 2;
xCentral = Number(((document.documentElement.clientWidth / 2) + (Math.sin(0) * radius)).toFixed(2)); //coordinate x rotella termostato
yCentral = Number(((document.documentElement.clientHeight / 2) + (Math.cos(0) * radius)).toFixed(2)); //coordinate y rotella termostato
titleT.style.left = xCentral - bigWheel.getBoundingClientRect().width + 'px';
titleT.style.top = yCentral + bigWheel.getBoundingClientRect().height + 'px';
titleG.style.left = xCentral - (3.33 * letterOglobal.clientWidth) + 'px';
titleG.style.top = yCentral - (letterOglobal.clientHeight / 2) + 'px';
letterOglobal.style.position = "fixed"; //posizionamento della lettera O del title GLOBAL
letterOglobal.style.left = xCentral - letterOglobal.clientWidth / 2 + 'px';
letterOglobal.style.top = yCentral - letterOglobal.clientHeight / 2 + 'px';

moveThermostat(counterValue, radiusThermostat, wheel);

window.addEventListener('resize', () => location.reload()); //per ridimensionare al resize event
parent.addEventListener('dblclick', (event) => { //disabilitato comportamento di default per double click
	if (event.target.className == 'button') {
		event.preventDefault();
	} else return;
});

parent.addEventListener('click', (event) => {
	if (event.target.closest('#upbutton')) { //event delegation per button +
		startMelting = true;
		increaseWater = 1;
		limit = limit + 10; //per determinare la crescita del livello dell'acsua sullo sfondo
		counterValue = Number((counterValue + 0.1).toFixed(1)); //aumento value del counter
		temperature(counter, counterValue);
		addAverage(averageTemperature, tempLabel, counterValue);
		changeColor(upbutton, tempLabel, '#E53935', false);
		progressStatus(progressbar, counterValue);
		moveThermostat(counterValue, radiusThermostat, wheel);

		if ((counterValue >= 0) && ((counterValue * 10) % 4) == 0) { //ogni 0.4°C avvia animazione
			activeIce = true;
			if (glaciarIndex < 4) {
				glaciarIndex = glaciarIndex + 1;
			}
			if (glaciarIndexTwo < 3) {
				glaciarIndexTwo = glaciarIndexTwo + 1;
			}
			if (glaciarIndexThree < 2) {
				glaciarIndexThree = glaciarIndexThree + 1;
			}
			breakSignal = true;
		} else {
			activeIce = false;
		}
	}

	if (event.target.closest('#downbutton')) { //event delegation per button -
		increaseWater = -1;
		limit = limit - 10;
		counterValue = Number((counterValue - 0.1).toFixed(1)); //diminuzione value del counter
		temperature(counter, counterValue);
		subAverage(averageTemperature, tempLabel, counterValue);
		changeColor(downbutton, tempLabel, '#4FC3F7', true);
		progressStatus(progressbar, counterValue)
		moveThermostat(counterValue, radiusThermostat, wheel);
	}
});

function temperature(label, num) { //value temperature del counter
	let number = Number(num);
	let temp;
	temp = `${number.toFixed(1)}°C`;
	if (parseFloat(temp) >= 0) {
		temp = `+${temp}`;
	}
	return label.textContent = temp;
}

function addAverage(num, label, addition) { //aggiunta value a temperatura media
	sum = ((Number(num.slice(0, 4))) + addition).toFixed(1);
	return label.textContent = `${sum}°C`;
}

function subAverage(num, label, subtraction) { //sottrazione value a temperatura media
	sub = ((Number(num.slice(0, 4))) + subtraction).toFixed(1);
	return label.textContent = `${sub}°C`;
}

function changeColor(button, label, color, reverse) { //cambiamento colore simboli buttons al click
	let arr = Array.from(button.children[0].children);
	arr.forEach((item) => {
		item.style.color = color;
		item.style.textShadow = "0 0 3px" + color + ", 0 0 5px " + color + ", 0 0 7px " + color + "";
		label.style.textShadow = "0 0 3px" + color + ", 0 0 5px " + color + ", 0 0 7px " + color + "";
	});

	if (reverse) {
		for (let elt of arr) {
			setTimeout(() => {
				elt.style.color = '';
				elt.style.textShadow = '';
				label.style.textShadow = '0 0 5px rgb(8, 5, 5), 0 0 7px rgba(179, 229, 252, 0.945), 0 0 9px rgba(179, 229, 252, 0.945), 0 0 11px rgba(179, 229, 252, 0.945)';
			}, 100 * (arr.indexOf(elt) + 1));
		}
	} else {
		arr.reverse();
		for (let elt of arr) {
			setTimeout(() => {
				elt.style.color = '';
				elt.style.textShadow = '';
				label.style.textShadow = '0 0 5px rgb(8, 5, 5), 0 0 7px rgba(179, 229, 252, 0.945), 0 0 9px rgba(179, 229, 252, 0.945), 0 0 11px rgba(179, 229, 252, 0.945)';
			}, 100 * (arr.indexOf(elt) + 1));
		}
	}
}

function progressStatus(bar, value) { //movimento progressbar centrale del termostato
	let num = 100 - (80 + (value * 10));
	if (num >= 90) {
		num = 90;
	} else if (num <= 0) {
		num = 0;
	}
	bar.style.width = num + '%';
}

function moveThermostat(angleValue, radius, target) { //movimento rotella termostato
	let angleRadians;
	angleRadians = (angleValue * 50) * (Math.PI / 180); //angolo in radianti
	let xWheel = Number(((document.documentElement.clientWidth / 2) + (Math.sin(-angleRadians) * radius)).toFixed(2));
	let yWheel = Number(((document.documentElement.clientHeight / 2) + (Math.cos(-angleRadians) * radius)).toFixed(2));
	target.style.left = xWheel - wheelRadius + 'px';
	target.style.top = yWheel - wheelRadius + 'px';
}