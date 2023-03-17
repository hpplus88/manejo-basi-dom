var nombre = "Oscar";
var edad;
edad = 30;
var elementos = ["Computadora","Celular"];
var persona = {
    nombre: "Diego",
    edad: 30
};


//FOR 
var estudiantes = ["Maria","Sergio","Rosa","Daniel"];
var estudiantes2 = [1,2,3,4,5,6,7,8,9];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes2.length; i++ ) {
    saludarEstudiantes(estudiantes2[i]);
}
for(var gordaMarula of estudiantes) {
    saludarEstudiantes(gordaMarula);
}

//WHILE
while(estudiantes.length > 0){
    var estudiantito = estudiantes.shift(); 
    //metodo de mutacion que va a sacar elementos, los borra
    saludarEstudiantes(estudiantito)
}

//OBJETOS
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){//esto es un metodo
        console.log(`Auto ${this.modelo} del ${this.annio}`);
    }
};
function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var articulos = [
    {nombre:"Bici", costo:3000},
    {nombre:"Tv", costo:2500},
    {nombre:"Libro", costo:320},
    {nombre:"Celular", costo:10000},
    {nombre:"Laptop", costo:20000},
    {nombre:"Termo", costo:1200},
    {nombre:"Tablet", costo:15000},
    {nombre:"Teclado", costo:500},
    {nombre:"Audifonos", costo:1700}
];
//RECORRER ARRAY
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});//me devuelve los que cumplen esa condicion

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});//me mapea o devuelve articulo.nombre en un nuevo array

//enconrtar algo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//filtra sobre mi array sin modificar y regresa cosas
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//regresa validacion de V o F para cosas que cumplan la validacion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});