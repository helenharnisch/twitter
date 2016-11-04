

function agregar(){
	// tomo texto de textarea
	var tareas = document.getElementById('tarea').value;
	// creo elemento div 
	var nuevasTareas = document.createElement('div');
	//contenedor donde irán las tareas
	var cont = document.getElementById('contenedor');
	
	
	//validacion que textarea no este vacio
	if(tareas == null || tareas.length == 0){
		alert('¡Error ! Debe ingresar tarea');
		return false;
	}

	//checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class', 'check');
	var basura = document.createElement('span');
	basura.setAttribute('class', 'glyphicon glyphicon-trash trash');

	//nodo texto del textarea
	var textoNuevaTarea = document.createTextNode(tareas);
	//contenedor de elemento
	var elementoContenedor = document.createElement('span');
	//contiene textarea
	elementoContenedor.appendChild(textoNuevaTarea);

	//paso checkbox a div
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	//paso span a div
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);
}






