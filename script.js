var pic = document.getElementById("a");
var clear = document.getElementById("clear");
var 
var circleObj{
    c1 : document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.addEventListener("click", colorRandom, true);
    setX : function(x){
	c1.setAttribute('cx', x);
    }
    setY : function(y){
	c1.setAttribute('cy',y);
    }
    setR : function(r){
	c1.setAttribute('cr', r);
    }
    setColor : function(c){
	c1.setAttribute('fill', c);
    }
    
    
}

var colorRandom = function(e){
  if (this.getAttribute("fill") === "blue"){
    this.setAttribute("fill", "red");
    e.stopPropagation();
  }
  else{
    pic.removeChild(this);
    e.stopPropagation();
    x = Math.floor(Math.random() * 501);
    y = Math.floor(Math.random() * 501);
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10);
    c1.setAttribute("fill", "blue");
    pic.appendChild(c1);
    c1.addEventListener("click", colorRandom, true);
  }
}


var toClear = function(e){
  pic.innerHTML = '';
}

pic.addEventListener("click", createCircle);
clear.addEventListener("click", toClear);
