
//funcion para tomar el tweet y crear div en donde estara cada post
var tweet = function(){
//un if para inhabilitar el boton de enviar si no hay caracteres
	if(document.getElementById('comment').value.length==0 || document.getElementById('comment').value.length>=150){
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
		wall.appendChild(newTweet);
	}
};
//agregando evento para el btn
var addTweet = btn.addEventListener('click', tweet);
//contador de caracteres
function count(obj){
var element = document.getElementById('display');
element.innerHTML = 150 -obj.value.length;
}


