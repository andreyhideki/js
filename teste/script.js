//EX01
// let nome = "teste";
// let numero = 123;
// let verdade = true;
// let lista = ["L1","L2","L3"];
// let fulano = { primeironome: "fulano", segundonome: " ciclano", idade: 20};
//
// // alert(nome);
// // alert(numero);
// // alert(verdade);
//
// console.log(typeof nome);
// console.log(typeof numero);
// console.log(typeof verdade);
// console.log(typeof lista);
// console.log(typeof fulano);
//
//
// let idade = "20";
//
// if (idade == 20){
//     console.log("igual nao restrito");
// }
//
// if (idade === 20){
//     console.log("igual restrito");
// }

//EX02
// function calculaPercentual(x,y){
//     return (y / x) * 100;
// }
//
// let x = 40;
// let y = 10;
// let perc = calculaPercentual(x,y);
// console.log(`${perc}% de ${x} é ${y}`);


//EX03
// function calcularPrecoImovel(metragem, quartos){
//     let m2 = 3000;
//     let multiplicador = 1.0;
//     switch (quartos) {
//         case 1:
//             multiplicador = 1;
//             break;
//         case 2:
//             multiplicador = 1.2;
//             break;
//         case 3:
//             multiplicador = 1.5
//             break;
//     }
//
//     console.log(multiplicador);
//     return (metragem * (m2 * multiplicador));
// }
//
// let metragem = 123;
// let quartos = 2;
// console.log(`O preco do imovel é R$ ${calcularPrecoImovel(metragem, quartos)}`);


//EX04
// function validar(usuario, senha){
//     let acesso = false;
//     if (usuario == 'joca' && senha == '123'){
//         acesso = true;
//     }
//     return acesso;
// }
//
// let usuario = 'joao';
// let senha = '1234';
// console.log(`acesso ${validar(usuario,senha) ? 'CONCEDIDO' : 'NEGADO' }`);

//EX05
function somar(x,y){
    return x + y;
}

const somar2 = (x,y) => {
    let resultado = x + y;
    return resultado;
}

const somar3 = (x,y) => x + y;

console.log(somar(10,5));
console.log(somar2(10,6));
console.log(somar3(10,7));

//EX06 Lista
const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handleKeyUp(e){
    if (e.key === 'Enter'){
        const novoLi = document.createElement('li');
        novoLi.innerHTML = input.value;
        lista.appendChild(novoLi);
        input.value = '';
    }
}

input.addEventListener('keyup', handleKeyUp);