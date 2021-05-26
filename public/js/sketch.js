let waterLevel = (document.documentElement.clientHeight * 10) / 100;
let increaseWater;
let limit = (document.documentElement.clientHeight * 10) / 100;
let cubes = [];
let cubesTwo = [];
let cubesThree = [];
let iceCubes;
let yCoord;
let glacialMove;
let gravity;
let timeToDisaster;

function setup() {
  let xMeasure = windowWidth;
  let yMeasure = windowHeight;
  let canvas = createCanvas(xMeasure, yMeasure); //canvas con misure pari alla width e alla height della window
  canvas.style('display', 'block'); //metodi specifici di p5.js
  canvas.position(0, 0);
  canvas.style('z-index', '-10');

  for (let i = 0; i < verticalBlocks; i++) { //creazione blocchi di ghiaccio / prima colonna da destra
    let start = windowHeight - section * verticalBlocks;
    yCoord = (start) + section * i;
    cubes[i] = new IceCube(windowWidth - section, yCoord, section, alpha, 4);
  }
  for (let i = 0; i < verticalBlocks - 1; i++) { //creazione blocchi di ghiaccio / seconda colonna da destra
    let start = windowHeight - section * (verticalBlocks - 1);
    yCoord = (start) + section * i;
    cubesTwo[i] = new IceCube(windowWidth - section * 2, yCoord, section, alpha, 4);
  }
  for (let i = 0; i < verticalBlocks - 2; i++) { //creazione blocchi di ghiaccio / terza colonna da destra
    let start = windowHeight - section * (verticalBlocks - 2);
    yCoord = (start) + section * i;
    cubesThree[i] = new IceCube(windowWidth - section * 3, yCoord, section, alpha, 4);
    cubesThree[i].shadowOffsetX = 50;
  }

}

function windowResized() { // per ridimensionamento canvas in caso di resize
  resizeCanvas(windowWidth, windowHeight);
}

let breakIndex = -1;


function draw() {
  background('rgba(1,87,155, 0.4)');

  for (let i = 0; i < cubes.length; i++) {
    cubes[i].show();
    if (activeIce && (stopIce == false)) {
      movement(cubes, glaciarIndex);
    }
  }

  for (let i = 0; i < cubesTwo.length; i++) {
    cubesTwo[i].show();
    if (activeIce && (stopIce == false)) {
      movement(cubesTwo, glaciarIndexTwo);
    }
  }

  for (let i = 0; i < cubesThree.length; i++) {
    cubesThree[i].show();
    if (activeIce && (stopIce == false)) {
      movement(cubesThree, glaciarIndexThree);
    }

  }

  noStroke();
  fill('rgba(2,136,209, 0.6)');
  rect(0, windowHeight, windowWidth, -waterLevel); //creazione rettangolo acqua
  switch (increaseWater) {
    case -1:
      waterLevel = waterLevel - 0.7; //cala il livello dell'acqua
      if (waterLevel <= limit) {
        waterLevel = limit;
      }
      break;
    case 1:
      waterLevel = waterLevel + 0.7; //aumenta il livello dell'acqua
      if (waterLevel >= limit) {
        waterLevel = limit;
      }
      break;
  }
  if (limit <= 26) { //limite per non far sparire il livello dell'acqua
    limit = 26;
  }

  if (startMelting) { //attiva scioglimento dopo x secondi in caso di aumento di temperatura
    meltingPole(cubes);
    meltingPole(cubesTwo);
    meltingPole(cubesThree);
  }
}

function movement(arr, index) { // per movimento cubi di ghiaccio
  gravity = createVector(0, 0.005);
  arr[index].show(breakSignal);
  arr[index].applyGravity(gravity);
  arr[index].update();
  arr[index].edges();
  if (arr[index].pos.y == height - waterLevel - (section / 2)) {
    let current = createVector(0.00040, 0);
    arr[index].applyCurrent(current);
    glacialMove = true;
  }
  if (glacialMove) {
    setTimeout(() => {
      arr[index].dissolve();
    }, 3000);
  }
}

function meltingPole(arr) { //scioglie il ghiaccio dopo x secondi nel caso di un aumento di temperatura anche minimo
  gravity = createVector(0, 0.005);
  for (let i = 0; i < arr.length; i++) {
    timeToDisaster = setTimeout(() => {
      for (let item of arr) {
        item.show(true);
        item.applyGravity(gravity);
        item.update();
        item.edges();
        item.dissolve();
      }
      limit = 400;
    }, 23000);
  }
}