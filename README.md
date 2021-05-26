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
    <li><a href="#quick-start">Quick start</a></li>
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

Questo progetto é composto da un file HTML per la struttura della pagina ed un file CSS per lo style dei vari elements che la compongono. Vi sono tre file di script JavaScript: il princiale , script.js, per collegare e far gestire agli elements le azioni degli utenti, visualizzare il counter e la temperatura e regolare la barra centrale, oltre al posizionamento di alcuni elements. Gli altri due vengono utilizzati per l'animazione sullo sfondo come reazione alle azioni dello user sfruttando alcuni metodi della library p5.js, per rendere più veloce e leggero il disegno di forme regolari e creare animazioni più naturali usando i Vectors.

<hr>

Questo progetto é stato creato per essere più di un semplice counter. 
Con i buttons + e - si aumenterà o diminuirà la temperatura, implementati come fossero i due tasti per la regolazione della temperatura di un termostato casalingo. Il counter partirà da 0°C, aumenterà o diminuirà di 0.1°C per ogni click dei button e varierà inoltre la temperatura media globale indicata nella seconda metà del quadrante centrale.<br>
Oltre ad aggiornare la value della temperatura nelle due metà dei quadranti del termostato, vi é implementata un'animazione in JavaScript che farà girare la pallina situata in corrispondenza della lettera "O" della parola "GLOBAL" del titolo della pagina web, come fosse un termostato manuale. Inoltre vi é una barra centrale che passa dal colore verde a rosso in base alla giusta regolazione di temperatura dell'ambiente.<br>
Questo per trasmettere la sensazione dell'abbassare o alzare la temperatura girando realmente il termostato del mondo, vedendone alcuni effetti.<br>
Tali cambiamenti si possono osservare nello sfondo, realizzato con JavaScript e la library p5.js, dove avverrà lo scioglimento dei cubi di ghiaccio e l'aumento del livello del'acqua. Per vederne il codice nel dettaglio si osservino i file sketch.js e icecube.js, dove, ricevendo dei segnali dal file js principale script.js, si attiveranno le animazioni e un timeout per il totale scioglimento delle tre file di cubi di ghiaccio, oltre che un'innalzamento eccessivo del livello dell'acqua.

<hr>
<hr>

## Usage

* Il counter indica 0°C nella parte superiore del termostato, mentre nella parte inferiore si trova riportata la temperatura media globale del pianeta secondo i dati NASA, 15.2°C calcolando le stime del 2021 partendo da una temperatura di 14°C dell’era preindustriale.

Fonte: 
:link: https://earthobservatory.nasa.gov/world-of-change/global-temperatures  :satellite:
<br>

* Aumentando la temperatura con il button si causerà l’innalzamento della temperatura di 0,1°C e del livello dell’acqua sullo sfondo.

* Continuando ad aumentare la temperatura con il button, ogni 0.4°C, si causerà lo scioglimento di una parte del ghiaccio sullo sfondo.

<div align="center">
  <img src="https://imagizer.imageshack.com/v2/320x240q90/923/kh1Lwf.png">
</div>

<br>

* Fin dal primo aumento di temperatura inoltre partirà un timeout di 23 secondi che giunto al termine causerà lo scioglimento del ghiaccio sullo sfondo aumentando inoltre il livello dell’acqua. 

<div align="center">
  <img src="https://imagizer.imageshack.com/v2/320x240q90/922/gBIcjO.png">
</div>

<br>

* Diminuendo la temperatura con il secondo button la temperatura diminuirà di 0.1°C e diminuirà il livello dell’acqua sullo sfondo.<br>

* Se all’inizio si diminuirà la temperatura il timeout non partirà ed il ghiaccio sullo sfondo non si scioglierà.

<div align="center">
  <img align="center" src="https://imagizer.imageshack.com/v2/320x240q90/922/9Ma3dK.png">
</div>

<br>

* La barra centrale del termostato dà un’altra rappresentazione visiva della temperatura, passando dal verde per una temperatura media del globo ottimale al rosso.

<div align="center">
  <img align="center" src="https://imagizer.imageshack.com/v2/320x240q90/924/SvD6O9.png">
</div>

<br>

<div align="center">
  <img align="center" src="https://imagizer.imageshack.com/v2/320x240q90/922/TTzI8Z.png">
</div>

<br>

* Ogni feature é una ricercata analogia con il mondo reale, dove non basta mantenere la temperatura del globo a questi livelli per fermare la sglaciazione dei poli e dei ghiacciai, evitando così che il livello degli oceani continui ad aumentare fino a raggiungere livelli catastrofici. Occorre far diminuire la temperatura del nostro pianeta il prima possibile. Anche un altro minimo aumento della temperatura potrebbe causare danni irreparabili.

<div align="center">
  <img align="center" src="https://earthobservatory.nasa.gov/ContentWOC/images/globaltemp/global_gis_2015-2019.png">
</div>

<hr>
<hr>

## Quick start  

Codice completo totalmente disponibile in questa repo GitHub: <br>
:link: https://github.com/Icarus1989/deglaciation-counter-project

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
