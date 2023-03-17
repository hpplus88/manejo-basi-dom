//Declarativas

function miFuncion(){
    return 3;
};

//Expresión o Anónimas, porque no tienen nombre

var miFuncion = function(a,b){
    return a + b;
};

function saludarEstudiante(estudiante){
    console.log(estudiante);
    console.log('Hola ${estudiante}');
};

var nombreCompleto;

function concatenoNombre(){
    var nombre = "Hernan";
    var apellido = "Pelatti";
    return nombre + " " + apellido
};

nombreCompleto = concatenoNombre();