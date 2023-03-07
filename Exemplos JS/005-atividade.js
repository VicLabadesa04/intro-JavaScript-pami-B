//crie um programa que recba 02 nota de 0 a 10 
// e  exiba as seguintes mensagens para cada faixa de valor
// Nota <5 =I; 
// Nota >= 5 e < 6,5 =R;
// Nota >6,5 < 8,5  = B;
// Nota >= 8,5= MB;

// if (nota>=5 && nota <6.5 {
   let.entrada= require ('prompt-sync') ();
   console.log( 'programa de cálculo de notas da ETEC');
   let valor;

   valor = entrada ('Digite a 1° nota do seu trabalho:');
let n1= parseFloat (valor);

   valor= entrada ('Digite a 2° nota do seu trabalho:');
   let n2= parseFloat (valor);

   let media= (n1+n2) / 2;

if (media < 5) {
valor = "I";
}
if (media>= 5 && media < 6.5) {
valor = "R"
}
if (media >= 6.5 && media 8.5 ){
   Valor="B";
}
if (media >=8.5){
   valor = "MB"
}
console.log('A nota Final é: ' + valor);


