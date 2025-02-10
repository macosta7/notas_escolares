var nota1 = 5;
var nota2 = 8;
var nota3 = 2;

var media = (nota1 + nota2 + nota3) /3;

if(media >= 7){
    console.log('Nota 1: ' + nota1);
    console.log('Nota 2: ' + nota2);
    console.log('Nota 3: ' + nota3);
    console.log('Média: ' + media);
    console.log('APROVADO!');
}
else{
    console.log('Nota 1: ' + nota1);
    console.log('Nota 2: ' + nota2);
    console.log('Nota 3: ' + nota3);
    console.log('Média: ' + media);
    console.log('REPROVADO');
}

maior = nota1;
var i = 1;

while(i <= 3){
    if(i == 1){
        if(nota2 > maior){
            maior = nota2;
        }
    } else if(i == 2){
        if(nota3 > maior){
            maior = nota3;
        }
    }
    i++;
}
console.log('A maior nota é: ' + maior);

menor = nota1;
var n = 1;

while(n <= 3){
    if(n == 1){
        if(nota2 < menor){
            menor = nota2;
        }
    } else if(i == 2){
        if(nota3 < menor){
            menor = nota3;
        }
    }
    n++;
}
console.log('A menor nota é: ' + menor);

