let entrada = required(' prompt-sync') ();
 
let idade = entrada ('Digite sua idade:');

 if (idade == 18){
    console.log (' Você tem idade para a carteira de habilitação!');
 }

if (idade > 18) {
    console.log (' Você já poderia estar dirigindo se tivesse habilitação!');
}
if ( idade < 18){
    console.log ('Você só anda de carona!');
}
