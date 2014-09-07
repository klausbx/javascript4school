var igel = { 
    context : '',
    canvas : '',
    breite : 100,
    hoehe : 100,
    x : 1,
    y : 1,
    r : 1,
    farbe : 'black',
    linienBreite : 1
    }; 
    
  igel.neu = function (grafikID) { 
    alert(grafikID);
    this.canvas = document.getElementById(grafikID); 
    this.context = this.canvas.getContext('2d'); 
   
    this.breite = this.canvas.width;  
    this.hoehe =  this.canvas.height;
    
    this.x = this.breite/2; 
    this.y = this.hoehe/2;
    this.context.moveTo(this.x, this.y);
  };
    
  igel.links = function(w) {
    this.r = (this.r - w) % 360;  
  }
    
  igel.vor = function(laenge) {
    this.context.save();
    this.context.beginPath();
    var x_alt = this.x; 
    var y_alt = this.y;
    this.x += laenge * Math.cos(this.r * Math.PI/180);
    this.y += laenge * Math.sin(this.r * Math.PI/180);
      
    this.context.moveTo(x_alt, y_alt);
    this.context.lineTo(this.x, this.y);
    this.context.strokeStyle = this.farbe;
    this.context.lineWidth = this.linienBreite;
    this.context.lineCap = 'round';
    this.context.stroke();
    this.context.beginPath();
    this.context.restore();
  }
    
  igel.geheZu = function(x, y) {
    this.x = x;
    this.y = y;
  }
  
  igel.richtung = function(w) {
    this.r = w;
  }
	
  igel.stiftFarbe = function(farbe) {
    this.farbe = farbe;
    //this.context.save();
    //this.context.drawImage(this.canvs,0,0);
    //this.context.restore();
  }

    igel.hgFarbe = function(farbe) {
      this.context.fillStyle = farbe;
      this.context.fillRect(0, 0, this.breite, this.hoehe);
    }
    
    igel.strichBreite = function(breite) {
      this.linienBreite = breite;
    }