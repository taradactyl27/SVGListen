var pic = document.getElementById("a");
var clearbut = document.getElementById("clear");

var circleObj = function (x, y, r, fill){
    var circ =  {
	cx : x,
	cy : y,
	cr : r,
	cfill : fill, 
	randColor : function(e) {
	    this.setAttribute("fill", "FF0000");
	    e.stopPropogation();
	    this.addEventListener("click", this.remove);
	    
    },
	remove : function(e){
	    pic.remove(this);
	    e.stopPropogation();
	},
	draw : function(){
	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute('cx', this.cx);
	    c1.setAttribute('cy', this.cy);
	    c1.setAttribute('fill', "black");
	    c1.setAttribute('cr', "10");
	    console.log('append');
	    return c1;
	}
    };
    return circ;
}

var clear = function(e){
    pic.innerHTML = "";
}

var create = function(e){
    var rect = pic.getBoundingClientRect();
    var x = e.offsetX;
    console.log(x);
    var y = e.offsetY;
    console.log(y);
    var circ = circleObj(x,y,10,"lightsteelblue");
    var rcir = circ.draw();
    pic.appendChild(rcir);
    rcir.addEventListener('click', this.randColor);
}

pic.addEventListener("click", create);
clearbut.addEventListener("click", clear);
