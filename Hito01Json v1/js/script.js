let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
    let capa = document.getElementById('salida');
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            generarTabla();
        }
        else {
            capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
        }
    }
}

function loadDatos() {
    ajax.open("GET", "datos.json");
    ajax.send();
}

function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>SALARIO</th><th>NOMBRE</th><th>APELLIDOS</th><th>NACIDO</th><th>NACIONALIDAD</th><th>PROCEDENCIA</th><th>DRAFT</th><th>POSICION</th><th>ALTURA</th><th>LOGROS</th><th>FOTO</th></tr>";
    var obj = JSON.parse(textJson);
    //Convirtiendo un texto a un objeto json.
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].salario +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>" +
            obj[i].apellidos +
            "</td><td>" +
            obj[i].informacion.nacido  +
            "</td><td>" +
            obj[i].informacion.nacionalidad +
            "</td><td>" +
            obj[i].informacion.procedencia +
            "</td><td>" +
            obj[i].informacion.draft +
            "</td><td>" +
            obj[i].posicion +
            "</td><td>" +
            obj[i].altura +
            "</td><td>" +
            obj[i].logros +
            "</td><td> <img src='imagenes/"+
            obj[i].informacion.foto +
            "'></td></tr>";
    }

    document.getElementById("demo").innerHTML = table;
}
