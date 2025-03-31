//DECLARAÇÕES E VARIAVEIS

var nome ="fiap"
console.log(nome);

let idade =19;
console.log(idade);

const sobrenome="Fiapinho";
console.log(sobrenome);

//declarando uma variável indefinida
let nome1;
console.log(nome1);

//declarando uma variável nula
let nome2=null;
console.log(nome2);

//TIPOS DE VARIÁVEIS

let exemplo1 = 10;
console.log(typeof exemplo1);

let exemplo2 ="Tecnologia";
console.log(typeof exemplo2);

let exemplo3 = true;
console.log(typeof exemplo3);

let exemplo4 ={};
console.log(typeof exemplo4)

let exemplo5 =["aluno1","aluno2"];
console.log(typeof exemplo5);

//CONVERSÕES

let numFloat = 123.456;
console.log(parseInt(numFloat));

let numString ="123.456";
console.log(parseFloat(numString));

//METODOS

// = verifica o tamanho da string
let frase = "O mundo da tecnologia";
console.log(frase.length);

//indexOf -retorna um trecho do texto

let texto="A programação indomável e sustentável";
console.log(texto.indexOf("ão"));


//slice - retorna um trecho do texto com início e final

let info = "Processamento de ponta";
console.log(info.slice(16,25));

//OPERADORES ARITMÉTICOS

const num1 = 10;
const num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//OPERADORES LÓGICOS

const num3=10;
const num4=20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3);

//OPERADORES DE COMPARAÇÃO

console.log(num3 == num4);
console.log(num3 != num4);
console.log(num3 === num4); // compara o vaolr e o tipo da variável
