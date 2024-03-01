// this is a js file
// Andrey Constante da Silva

//var ou let = variavel

/*var primeiroNome = "Andrey";
var sobrenome = "Constante da Silva";
var idade = 18;
var estudante = true;

console.log("nome: ", primeiroNome, sobrenome, "idade: ", idade, " é estudante?", estudante);
console.log(typeof primeiroNome);
console.log(typeof idade);
console.log(typeof estudante);

var nome = prompt("escreva seu nome: ");
var idade = prompt("escreva sua idade: ");
console.log(typeof nome);
console.log(typeof idade);
*/

/*
const idadeNumero = 23;
const idadeTexto = idadeNumero.toString();

console.log(typeof idadeNumero);
console.log(typeof idadeTexto);
*/

/*
const idadeTexto = "23";
const idadeNumero = Number(idadeTexto);

console.log(typeof idadeTexto);
console.log(typeof idadeNumero);
*/

/*
const primeiroValor = 10;
const segundoValor = 20;

const resultado = primeiroValor + segundoValor + 4;
console.log(resultado);
*/

/*
const primeiroValor = 10;
const segundoValor = 20;

const resultado = primeiroValor - segundoValor;
console.log(resultado);
*/

/*
const primeiroValor = 10;
const segundoValor = 20;

const resultado = primeiroValor * segundoValor;
console.log(resultado);
*/

/*
const primeiroValor = 345;
const segundoValor = 10;

const resultado = primeiroValor / segundoValor;
console.log(resultado);

const restoDaDivisao = 11 % 4;
console.log(restoDaDivisao);
*/

/*
const resultado = 3 + 4;
console.log(resultado);
*/

/*
const resultado = 3 * 5 / 2;
console.log(resultado);
*/

/*
const resultado = (4 - 5) * -1;
console.log(resultado);
*/

/*
const resultado = 234 % 5;
console.log(resultado);
*/

/*
console.log(1 === 2); //false
console.log(1 === 1); //true
console.log((1+1) === 2); // true
console.log(1 !== 2); //true

const condicao = 1 !== 2
*/

/*
var a = true
var b = false
var c = true

console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(a && b && c);
*/

/*
function comparador (num1, num2){
    if (num1 > num2) {
        return 'o primeiro número '(num1), 'é maior que o segundo número '(num2),'';
    }
    else if (num1 < num2) {
        return 'o segundo número '(num2), 'é maior que o primeiro número '(num1),'';
    }
    else
        return 'os números são iguais';
}
    const num1 = prompt("digite o primeiro número");
    const num2 = prompt("digite o segundo número");
    const result = comparador(num1, num2);
    alert(result)
*/

/*
let paisDeOrigem = prompt("digite sua nacionalidade")

if(paisDeOrigem === 'Brasil'){
    console.log('brasileiro')
} else if (paisDeOrigem === 'EUA'){
    console.log('norte americano')
} else if (paisDeOrigem === 'Inglaterra'){
    console.log('inglês')
} else if (paisDeOrigem === 'França'){
    console.log('francês')
} else if (paisDeOrigem === 'Itália'){
    console.log('italiano')
} else if (paisDeOrigem === 'Canadá'){
    console.log('canadense')
} else {
    console.log('Nacionalidade não encontrado')
}
*/

/*
let paisDeOrigem
switch (paisDeOrigem) {
    case 'Brasil':
        console.log('brasileiro')
        break;
    case 'EUA':
        console.log('norte americano')
        break;
    case 'Inglaterra':
            console.log('inglês')
            break;
    default:
        console.log('Nacionalidade não encontrado')
        break;
}
*/

/*
let inicialPK  = prompt('Escolha seu inicial: Bulbasauro, Charmander, Squirtle.');
switch (inicialPK) {
    case 'Bulbasauro':
        alert('Planta e veneno')
        console.log('Planta e veneno')
        break;
    case 'Charmander':
        alert('Fogo')
        console.log('Fogo')
        break;
    case 'Bulbasauro':
         alert('Água')
         console.log('Água')
         break;
    default:
        alert('inicial não encontrado')
        break;

}
*/

/*
let condicao1 = true
let condicao2 = false

if (condicao1 && condicao2){
    //entra aqui se ambos forem true
}

if (!condicao1){
    //entra aqui se condicao1 for false
}
*/

/*
var idade = prompt('digite sua idade')
let escolaridade = prompt('você concluiu o ensino médio?')
let curso = prompt('você faz mais algum curso?')

if (idade >= 18) {
    idade = true
} else {
    idade = false
}
if (escolaridade === 'sim') {
    escolaridade = true
} else{
    escolaridade = false
}
if (curso === 'não'){
    curso = false
} else {
    curso = true
}

if(idade === true && escolaridade === true && curso === false) {
    console.log('você está apto a estudar na faculdade.')
} else {
    console.log('você não está apto a estudar na faculdade.')
}
*/

/*
function calculadora(num1, num2) {
if (operacao === 'soma') {
return soma = num1 + num2;
}else if(operacao === 'subtração'){
    return soma = num1 - num2
}else if(operacao === 'vezes'){
    return soma = num1 * num2
}else(operacao === 'dividido');{
    return soma = num1 / num2
    }    
}
var operacao = prompt("digite a operação desejada:soma, subtração, vezes, dividido")
var num1 = Number(prompt('digite o primeiro número'))
var num2 = Number(prompt('digite o segundo número'))
const calcular = calculadora(num1, num2);
console.log(calcular)
*/

function mediaAluno(arrayMedia = []){
    arrayMedia([])/3
} console.log(mediaArray([6,9,5]));

