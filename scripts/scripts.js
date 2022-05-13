var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(500,500,0,500,500,200);
grd.addColorStop(0, "white");
grd.addColorStop(1, "purple");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000,1000);