<div align="center">
  <h1>Deglaciation Counter Project</h1>
</div>

<p align="center">
  Un counter per verificare le conoscenze acquisite nel linguaggio JavaScript, creato con l’obiettivo di sensibilizzare l’utente sull’argomento del surriscaldamento climatico.
</p>

<hr>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#quick-start">Quick start</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<hr>

## About The Project

![Product Name Screen Shot](https://imagizer.imageshack.com/v2/640x480q90/924/F9xcYc.png)

Questo progetto é stato creato per essere più di un semplice counter. 
Con i button + (:arrow_up:) o - (:arrow_down:) si aumenterà o diminuirà la temperatura, implementati come fossero i due tasti per la regolazione della temperatura di un termostato casalingo. Il counter partirà da 0°C, aumenterà o diminuirà di 0.1°C per ogni click dei button e varierà inoltre la temperatura media globale indicata nella seconda metà del quadrante centrale.
Oltre ad aggiornare la value della temperatura nelle due metà dei quadranti del termostato, vi é implementata un'animazione in JavaScript che farà girare la pallina situata in corrispondenza della lettera "O" della parola "GLOBAL" del titolo della pagina web. Inoltre vi é una barra centrale che passa dal colore verde a rosso in base alla giusta regolazione di temperatura dell'ambiente. Questo per trasmettere la sensazione dell'abbassare o alzare girando relamente il termostato del mondo e di vederne gli effetti.
Questi si possono osservare nello sfondo, realizzato con JavaScript e la library p5.js, dove avverrà lo scioglimento dei cubi di ghiaccio e l'aumento del livello del'acqua. Per vederne il codice nel dettaglio si osservino i file sketch.js e icecube.js, dove, ricevendo dei segnali dal file js principale script.js, si attiveranno le animazioni e un timeout per il totale scioglimento delle tre file di cubi di ghiaccio.

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
* [p5.js Library](https://p5js.org/)

<hr>

## Usage

* Il counter indica 0°C nella parte superiore del termostato, mentre nella parte inferiore si trova riportata la temperatura media globale del pianeta secondo i dati NASA, 15.2°C calcolando le stime del 2021 partendo da una temperatura di 14°C dell’era preindustriale.
<!-- <br> -->
Fonte: 
:link: https://earthobservatory.nasa.gov/world-of-change/global-temperatures  :satellite:
<br>

* Aumentando la temperatura con il button si causerà l’innalzamento della temperatura di 0,1°C e del livello dell’acqua sullo sfondo.

* Continuando ad aumentare la temperatura con il button, ogni 0.4°C, si causerà lo scioglimento di una parte del ghiaccio sullo sfondo.

![Image of first deglaciation](https://imagizer.imageshack.com/v2/320x240q90/924/sxrKmz.png)

* Fin dal primo aumento di temperatura inoltre partirà un timeout di 30 secondi che giunto al termine causerà lo scioglimento del ghiaccio sullo sfondo aumentando inoltre il livello dell’acqua. 

![Image of full deglaciation](https://imagizer.imageshack.com/v2/320x240q90/924/kYUDJV.png)

* Diminuendo la temperatura con il secondo button la temperatura diminuirà di 0.1°C e diminuirà il livello dell’acqua sullo sfondo.

* Se all’inizio di diminuirà la temperatura il timeout non partirà ed il ghiaccio sullo sfondo non si scioglierà.

![Image of stopped deglaciation](https://imagizer.imageshack.com/v2/320x240q90/923/PSvojC.png)

* La barra centrale del termostato dà un’altra rappresentazione visiva della temperatura, passando dal verde per una temperatura media del globo ottimale al rosso.

![Central bar green](https://imagizer.imageshack.com/v2/320x240q90/924/SvD6O9.png)

![Central bar red](https://imagizer.imageshack.com/v2/320x240q90/922/TTzI8Z.png)

* Ogni feature é una ricercata analogia con il mondo reale, dove non basterà maniere la temperatura del globo a questi livelli, ma per fermare la sglaciazione dei poli e dei ghiacciai, ed evitare che il livello degli oceani continui ad aumentare fino a raggiungere livelli catastrofici.

![Image of global warming](https://earthobservatory.nasa.gov/ContentWOC/images/globaltemp/global_gis_2015-2019.png)

<hr>

## Quick start  

Codice completo in questa repo GitHub: <br>
:link: https://github.com/Icarus1989/deglaciation-counter-project

<hr>

## Demo
L’applicazione é stata pubblicata su Firebase. 
E’ possibile provarla al link:
<br>
:link: https://deglaciation-counter-pro-630d3.web.app/

<hr>

## License

Distributed under the MIT License.

<hr>

## Contact

Alex -  westcoastrapper89@yahoo.it

Project Link :link: : [ https://github.com/Icarus1989/deglaciation-counter-project]
