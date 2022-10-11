window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
function alertaVerde(){
	alert("wuju");
}
const listener = document.getElementById("theGreen");
listener.addEventListener("click",alertaVerde);