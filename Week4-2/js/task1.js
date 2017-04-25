 function render(){
     	var word = "Web 2 is awesome!";
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
        document.getElementById("screenWidth").textContent = window.innerWidth;
        document.getElementById("screenHeight").textContent = window.innerHeight;
        document.getElementById("location").textContent = document.lastModified;
        document.getElementById("myWord").textContent = word;
        document.getElementById("isItAwesome").textContent = word.indexOf("awesome")>-1?"Yes":"No";


	};

var button =  document.getElementById("button");
window.addEventListener("resize",demo);
button.addEventListener("click",demo);
function demo() {
	render();
}