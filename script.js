// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const formulario = document.querySelector('#formulario');
const input = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
//Si yo uso funciones particualares para la seleccion quedaria así
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');

//h1.innerHTML = 'Patito <br> Feo ';
h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla','PlatziSamsung');
h1.classList.add('verde');
h1.classList.remove('rojo');
//input.value = "Hola Manola";
input.placeholder = "Hola";
input2.placeholder = "Manola";

const img = document.createElement('img');
img.setAttribute('src','https://creatives.sascdn.com/diff/3370/8679459/Imgur_Store_300x250_4_8942a8a2-22ed-4916-bc20-8ea149fd7eef.png');
pid.innerHTML = "";
pid.appendChild(img);

//esto reemplaza en el html el OnClick, antes de agregar el form
//btn.addEventListener('click' ,btnOnClick);
btn.addEventListener('click',sumarInputValues)

function sumarInputValues(){
    let resultado = parseInt(input.value) + parseInt(input2.value);
    pResult.innerHTML = '<u>El resultado es</u> <br>' + resultado;
};