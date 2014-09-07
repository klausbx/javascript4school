/*jslint vars: false, white: true, indent: 4 */
function igelModul() {
    "use strict";
    var canvas,
        context,
        breite,
        hoehe,
	      x = 10,
	      y = 10,
	      r = 360,
        farbe = 'black',
        linienBreite = 3;
	
    function neu (grafikID) { 
        canvas = document.getElementById(grafikID); 
        context = canvas.getContext('2d'); 
        breite = canvas.width;  
        hoehe =  canvas.height;
        x = breite/2; 
        y = hoehe/2;
        context.moveTo(x, y);
    }
	
    function links (w) {
        r = (r - w) % 360;  
    }
	
    function linie (x1, y1, x2, y2) {
        context.beginPath();      
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = farbe;
        context.lineWidth = linienBreite;
        context.lineCap = 'round';
        context.stroke();
    }

    function vor (laenge) {
        var x_alt = x, 
            y_alt = y;
        x += laenge * Math.cos(r * Math.PI/180);
        y += laenge * Math.sin(r * Math.PI/180);
        linie(x_alt, y_alt, x, y);
    }
	
    function geheZu (xNeu, yNeu) {
        x = xNeu;
        y = yNeu;
    }
  
    function richtung (w) {
        r = w;
    }
  
    function stiftBreite (breite) {
      linienBreite = breite;
    }
    
    function stiftFarbe (farbeNeu) {
        farbe = farbeNeu;
    }

    function hgFarbe (farbe) {
        context.fillStyle = farbe;
        context.fillRect(0, 0, breite, hoehe);
    }
/////////////??????????????
    function get () {
        return r;
    }
    
    function set (ri) {
        r = ri;
    }
    
// Die Funktion igelModul liefert ein Objekt mit Igel-Methoden zurück. Diese
// Methoden nennt man privilegiert, weil nur sie auf obige Variablen
// canvas, context, breite, hoehe, x, y, .., linienbreite zugreifen können.   

    return {
        getR : get, /////////? 
        setR : set,  ////////?  
        neu : neu,
	      links : links,
	      vor : vor,
	      linie : linie,
	      geheZu : geheZu,
	      richtung : richtung,
	      stiftBreite : stiftBreite,
	      stiftFarbe : stiftFarbe,
	      hgFarbe : hgFarbe
    }; 
    
} // Ende der Funktion igelModul; jetzt werden zwei vollkommen unabhängige
  // Igel-Objekte igel und hase erzeugt. Auf oben deklarierten Variablen
  // können - in jedem Objekt für sich - die Methoden zugreifen. 
var igel = igelModul(),
    hase = igelModul();