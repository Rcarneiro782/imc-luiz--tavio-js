// capturar eventode submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
e.preventDefault();
const inputpeso = e.target.querySelector('#peso');
const inputaltura = e.target.querySelector('#altura');


const peso = Number(inputpeso.value);
const altura = Number(inputaltura.value);

if (!peso) {
setResultado('Peso inválido', false);
return;
}

if (!altura){
    setResultado('altura inválida', false);
    return;
}

const imc = GetImc(peso, altura);
const NivelImc = GetNivelImc(imc);

const msg = `Seu IMC é ${imc} (${NivelImc}) .`
setResultado(msg, true);
});
function GetNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'  ];
if (imc >= 39.9) {
return nivel[5];
}
 if (imc >= 34.9 ){
    return nivel[4];
}
 if (imc >= 29.9 ){
    return nivel[3];
}
 if (imc >= 24.9 ){
    return nivel[2];
} 
if ( imc >= 18.5 ){
    return nivel[1];
}
 if (imc < 18.5){
    nivel[0]
}
}


function GetImc (peso, altura){
    const imc = peso/altura ** 2 ;
    return imc.toFixed(2);

}

function criaP (){
const  p = document.createElement('p');
return p;
}

function setResultado (msg, isvalid) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '' ;



const p = criaP();
if (isvalid) {p.classList.add('paragrafo-resultado');
}else {
    p.classList.add('bad');
}
p.innerHTML = msg;
resultado.appendChild(p);
}

/*p.classList.add();
p.innerHTML = 'nothing'; hey*/ 