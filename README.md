<hr>
<hr>

<div align="center">
  <h1>Deglaciation Counter Project</h1>
</div>

<p align="center">
  Un counter per verificare le conoscenze acquisite nel linguaggio JavaScript tramite la Super Guida di Start2Impact JavaScript Basics, creato con l’ulteriore obiettivo di sensibilizzare l’utente sull’argomento del surriscaldamento climatico.
</p>

<hr>
<hr>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#description">Description</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contacts">Contacts</a></li>
  </ol>
</details>

<hr>
<hr>

## About The Project

<div align="center">
  <img src="https://imagizer.imageshack.com/v2/640x480q90/924/Au00v5.png">
</div>


### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
* [p5.js Library](https://p5js.org/)
<br>

### Description

Questo progetto é stato creato per essere più di un semplice counter. 
I buttons + e - sono implementati come fossero i due tasti per la regolazione della temperatura di un termostato casalingo, ma globale.
Vi é un'animazione che farà girare una rotella, situata in corrispondenza della lettera "O" della parola "GLOBAL", come se si stesse usando un termostato manuale, ed una barra centrale che passerà dal colore verde al rosso in base alla giusta regolazione di temperatura dell'ambiente. Queste implementazioni sono realizzate tramite l'uso esclusivo di JavaScript nel file script.js.<br>
Lo sfondo, realizzato con JavaScript e la library p5.js, permette di percepire l'innalzamento o l'abbassamento della temperatura globale attraverso lo scioglimento dei cubi di ghiaccio e l'aumento del livello del'acqua. Per vederne il codice nel dettaglio si osservino i file sketch.js e icecube.js.

Fonte dati temperatura di partenza:<br>
:link: https://earthobservatory.nasa.gov/world-of-change/global-temperatures  :satellite:

:white_check_mark: Estensione WAVE per accessibilità.

<hr>
<hr>

## Usage

* Aumentando la temperatura con il button "+" si causerà l’innalzamento della temperatura di 0.1°C e del livello dell’acqua sullo sfondo. Ogni 0.4°C, avverrà lo scioglimento della fila superiore dei cubi ghiaccio.

<div align="center">
  <img src="https://imagizer.imageshack.com/v2/320x240q90/923/kh1Lwf.png">
</div>

<br>

* Fin dal primo aumento di temperatura inoltre partirà un timeout di 23 secondi che, giunto al termine, causerà lo scioglimento totale del ghiaccio sullo sfondo. La funzione viene usata anche per ripulire la window da eventuali sfumature lasciate dall'animazione, dovute ad un eccessiva velocità nell'aumento di temperatura.

<div align="center">
  <img src="https://imagizer.imageshack.com/v2/320x240q90/922/gBIcjO.png">
</div>

<br>

* Con il button "-" la temperatura diminuirà di 0.1°C e calerà anche il livello dell’acqua sullo sfondo. Se all’inizio si diminuirà la temperatura, il timeout non partirà ed il ghiaccio sullo sfondo non si scioglierà.

<div align="center">
  <img align="center" src="https://imagizer.imageshack.com/v2/320x240q90/922/9Ma3dK.png">
</div>

<br>

* Ogni feature inserita vuole essere un'analogia con il mondo reale, dove non basta mantenere la temperatura della terra a questi livelli per fermare la sglaciazione dei poli e dei ghiacciai. Occorre far diminuire la temperatura del nostro pianeta il prima possibile. Anche un altro minimo aumento della temperatura potrebbe causare danni irreparabili.

<div align="center">
  <img align="center" src="https://earthobservatory.nasa.gov/ContentWOC/images/globaltemp/global_gis_2015-2019.png">
</div>

<hr>
<hr>

## Demo
L’applicazione é stata pubblicata su Firebase. 
E’ possibile provarla al link:
<br>
:link: https://deglaciation-counter-pro-630d3.web.app/

<hr>
<hr>

## License

Distributed under the MIT License.

<hr>
<hr>

## Contacts

Alex<br>
westcoastrapper89@yahoo.it<br>
[GitHub](http://https://github.com/Icarus1989)<br>
[Instagram](http://https://www.instagram.com/alex._.1989/)<br>
[Facebook](https://www.facebook.com/alex.valente.92)<br>

Project Link :link: : [ https://github.com/Icarus1989/deglaciation-counter-project]