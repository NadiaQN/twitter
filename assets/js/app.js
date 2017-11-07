
//mi funcion principal que creara los post y deshabilitara el boton
var tweet = function(){
//un if para inhabilitar el boton de enviar si no hay caracteres
	if(document.getElementById('comment').value.length==0 || document.getElementById('comment').value.length>=140 || document.getElementById('comment').value== " "){
		document.getElementById('btn').setAttribute('disabled');
	}else{
//primero tomamos el comentario
		var comments = document.getElementById('comment').value;
//limpiar textarea
		document.getElementById('comment').value="";
//creando el div donde iran los tweets
		var newTweet = document.createElement('div');
		newTweet.className = 'post';
//rescatamos el valor de nuestro section donde iran los div
		var wall = document.getElementById('wall');
//agregando una etiqueta p donde iran los tweets
		var paragraph = document.createElement('p');
//creando el nodo de texto para p
		var nodoText = document.createTextNode(comments);
//ingresando el nodo de texto a p
 		paragraph.appendChild(nodoText);
//agregando los elementos al newtweet
		newTweet.appendChild(paragraph);
//agregando el div a section
		wall.appendChild(newTweet);c
	}
};
//agregando evento para el btn
 btn.addEventListener('click', tweet);
//contador de caracteres
function count(obj){
	var element = document.getElementById('display');
	element.innerHTML = 140 -obj.value.length;
	document.getElementById('comment').size = document.getElementById('comment').value.length;
//un if para cambiar color segun caracteres
	if(document.getElementById('comment').value.length >=120 ){
		element.style.color = 'black';
	}if(document.getElementById('comment').value.length >=130){
		element.style.color = 'red';
	}
};
//funcion para auto resize textarea
var textarea = document.getElementById("comment");
var heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
