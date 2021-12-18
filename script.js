var currentDate  = new Date(),
    currentDay   = currentDate.getDate() < 10 
                 ? '0' + currentDate.getDate() 
                 : currentDate.getDate(),
    currentMonth = currentDate.getMonth() < 9 
                 ? '0' + (currentDate.getMonth() + 1) 
                 : (currentDate.getMonth() + 1);

document.getElementById("date").innerHTML = currentMonth + '.' + currentDay + '.' +  currentDate.getFullYear();


function Rgb(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

function set_background(rgb) {
   document.querySelector(".clock").style.backgroundColor = "rgb("+rgb.r+","+rgb.g+","+rgb.b+")";
}

function time_to_rgb(time) {
  return new Rgb(
    Math.floor(400*time.getHours()/24),
    Math.floor(358*time.getMinutes()/60),
    Math.floor(358*time.getSeconds()/60)   
  )
}

function time_to_str(time) {
  var parts = [];
  parts.push(pad(time.getHours()));
  parts.push(pad(time.getMinutes()));
  parts.push(pad(time.getSeconds()));
  
  return parts.join(":");
}

function rgb_to_hex(rgb) {
  var hex = "#";
  hex += pad(rgb.r.toString(16));
  hex += pad(rgb.g.toString(16));
  hex += pad(rgb.b.toString(16));
  
  return hex.toUpperCase();
}

function pad(str) {
  str = ""+str;
  while (str.length < 2) {
    str = "0" + str;
  }
  
  return str;
}

function cycle() {
  var t = new Date();
  var rgb = time_to_rgb(t);
  set_background(rgb);
  document.querySelector(".time").innerHTML = time_to_str(t);
  
  document.querySelector(".color").innerHTML = rgb_to_hex(rgb);
}

setInterval(cycle, 40);




