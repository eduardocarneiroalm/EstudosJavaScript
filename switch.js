const prompt = require("prompt-sync")();
// Estrutura condicional switch

// switch (valor) {
//     case "esperado": {
//         break
//     }
// }

// console.log("1 - Hamburguer");
// console.log("2 - pizza");
// console.log("3 - Salada");

// const pratoEscolhido = parseInt(prompt("qual o prato que você quer escolher: "));

// switch(pratoEscolhido) {
//     case 1: {
//         console.log("Ok! o seu Hamburguer chegará que alguns minutos! Obrigado pelo pedido!")
//         break;
//     }
//     case 2: {
//         console.log("Ok! a sua pizza chegará que alguns minutos! Obrigado pelo pedido!")
//       break;
//     }
//     case 3: {
//         console.log("Ok! a sua salada chegará que alguns minutos! Obrigado pelo pedido!")
//         break;
//     }
//     default: {
//         console.log("prato não disponivel")
//     }
// }


let num1 = parseInt(prompt("qual o primeiro valor: "));
let num2 = parseInt(prompt("qual o segundo valor: "));

const operacao = prompt("qual a operação que deseja utilizar (-)(+)(/)(*)(%): ");

switch(operacao) {
    case "-": {
        let resultado = num1 - num2;
        console.log("o resultado da subtração é: ", resultado);
        break
    }
    case "+": {
        let resultado = num1 + num2;
        console.log("o resultado da soma é: ", resultado);
        break;
    }
    case "*": {
        let resultado = num1 * num2;
        console.log("o resultado da multiplicação é: ", resultado);
        break;
    }
    case "/": {
        let resultado = num1 / num2;
        console.log("o resultado da divisão é: ", resultado);
        break;
    }
    case "%": {
        let resultado = num1 % num2;
        console.log("o resultado do módulo é: ", resultado);
        break;
    }

}