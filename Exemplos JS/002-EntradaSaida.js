//chamando a biblioteca que será utilizada
var entrada = requir('prompt-sync') ();

let nome = entrada(' digite seu nome: ');
console.log (' Nome digitado: ' +nome);

//toda entrada é string
let num; //criação de variavel 

//entrada
num = entrada ('Digite um numero');
let n1 =parseInt (num);
num = (' Digite outro numero');
let n2 = parseInt(num);

//Processamento
let soma = n1 + n2;

//saida
console.log(' A soma do 1° com 2° n° inserido é: ' + soma);

entrada();
console.log ('Fim do programa')
