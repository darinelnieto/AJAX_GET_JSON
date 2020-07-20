// desde aqui comienza la funcion del boton baner
// en pprimera instancia se captura el evento clic del boton de id desplega, el cual tien un icono baner
document.getElementById('desplega').addEventListener('click', function(){
	var row1 = document.getElementById('cabeza'); //esta bariable llama al row que contiene la cabecera de la noticia y el boton de el control de la noticia
	var bar1 = document.getElementById('esconde'); //este es el boton escondido que aparece cuando esta funcion se cumple para cumplir la funcion de esconder las cabeceras y titulos de la noticia
	
	row1.style.marginLeft ="0", row1.style.transition = "1s",row1.style.backgroundColor ="white" ; //esta es la funcion de el evento de aparecer la noticia
	bar1.style.display="block";// evento donde aparece el boton escondido que guarda la funcion de ocultar la noticia y dejar la pantalla en blanco
	document.getElementById('desplega').style.display="none"; //aqui desaparece el boton que inició esta funcion la cual finaliza aqui
});

//esta es la segunda funcion que se crea al aparecer el boton oculto
//comenzamos capturandole el evento al boton
document.getElementById('esconde').addEventListener('click', function(){
	var row1  = document.getElementById('cabeza');//esta es la bariable que toma el row que se llamo a la pantalla en la función anterior
	var bar = document.getElementById('desplega');//este es la bariable que manipulara el boton que se oculto de la primera funcion
	
	row1.style.marginLeft ="-2000px", row1.style.transition="1s", row1.style.backgroundColor ="#cacaca";//aqui se traslada el row a su lugar de inicio para dejar limpio el body
	bar.style.display ="block";//aqui se llama al boton que se oculto al terminar la primera funcion de aparecer el row de la cabecera de las noticias
	document.getElementById('esconde').style.display="none";//aqui finaliza la segunda funcion, volviendo a ocultar el boton que se llamo en la primera funcion
});

// mostrar noticias 1 es similar a las funciones de el boton de arriba


var objet;
var lugarNoticia = document.getElementById('cabeza');

if(window.XMLHttpRequest){
	ajax = new XMLHttpRequest();
} else {
	ajax = new ActiveXOject('Miscrosoft.XMLHTTP');
}

function nuestraNoticia(){
	if(ajax.readyState == 4 && ajax.status == 200){
		 var llamado = ajax.responseText;
		 lugarNoticia.innerHTML += llamado;

		 objet = JSON.parse(llamado);
		
		lugarNoticia.innerHTML = '';

	for(let bloc of objet){
		lugarNoticia.innerHTML += `
		<div class="col-12mt-3"  id="titulares">
			<button id="mostrarNoticia${bloc.id}" class="btn btn-info uno">ver más</button>
			<button id="ocultarNoticia${bloc.id}" class="btn btn-info dos">ver menos</button>
			<h3>${bloc.title}</h3>
		</div>
		<div class="row noti" id="noticia${bloc.id}">
			<div class="col-12 text-center col-md-6">
			<img src="${bloc.image}" alt="">
			</div>
			<div class="col-12 col-md-6">
				<p>${bloc.content}</p>
			</div>
		</div>
		`
	}
		document.getElementById('mostrarNoticia1').addEventListener('click', function(){
		var noti1 = document.getElementById('noticia1');
		var btn2 = document.getElementById('ocultarNoticia1');
	
		noti1.style.marginTop="0", noti1.style.transition="2s";
		btn2.style.display="block";
		document.getElementById('mostrarNoticia1').style.display="none";
	});
		document.getElementById('ocultarNoticia1').addEventListener('click', function(){
		var noti2 = document.getElementById('noticia1');
		var btn1 = document.getElementById('mostrarNoticia1');
		
		noti2.style.marginTop="-200px", noti2.style.transition="2s";
		btn1.style.display="block";
		document.getElementById('ocultarNoticia1').style.display="none";
	});
			document.getElementById('mostrarNoticia2').addEventListener('click', function(){
		var noti1 = document.getElementById('noticia2');
		var btn2 = document.getElementById('ocultarNoticia2');

		noti1.style.marginTop="0",  noti1.style.transition="2s";
		btn2.style.display="block";
		document.getElementById('mostrarNoticia2').style.display="none";
	});
		document.getElementById('ocultarNoticia2').addEventListener('click', function(){
		var noti2 = document.getElementById('noticia2');
		var btn1 = document.getElementById('mostrarNoticia2');

		noti2.style.marginTop="-200px",  noti2.style.transition="2s";
		btn1.style.display="block";
		document.getElementById('ocultarNoticia2').style.display="none";
	});
			document.getElementById('mostrarNoticia3').addEventListener('click', function(){
		var noti1 = document.getElementById('noticia3');
		var btn2 = document.getElementById('ocultarNoticia3');

		noti1.style.marginTop="0",  noti1.style.transition="2s";
		btn2.style.display="block";
		document.getElementById('mostrarNoticia3').style.display="none";
	});
		document.getElementById('ocultarNoticia3').addEventListener('click', function(){
		var noti2 = document.getElementById('noticia3');
		var btn1 = document.getElementById('mostrarNoticia3');

		noti2.style.marginTop="-200px",  noti2.style.transition="2s";
		btn1.style.display="block";
		document.getElementById('ocultarNoticia3').style.display="none";
	});
			document.getElementById('mostrarNoticia4').addEventListener('click', function(){
		var noti1 = document.getElementById('noticia4');
		var btn2 = document.getElementById('ocultarNoticia4');

		noti1.style.marginTop="0",  noti1.style.transition="2s";
		btn2.style.display="block";
		document.getElementById('mostrarNoticia4').style.display="none";
	});
		document.getElementById('ocultarNoticia4').addEventListener('click', function(){
		var noti2 = document.getElementById('noticia4');
		var btn1 = document.getElementById('mostrarNoticia4');

		noti2.style.marginTop="-200px", noti2.style.transition="2s";
		btn1.style.display="block";
		document.getElementById('ocultarNoticia4').style.display="none";
	});
	}
}

ajax.onreadystatechange = nuestraNoticia;
ajax.open( "GET", 'contenido.json', true );
ajax.send();

