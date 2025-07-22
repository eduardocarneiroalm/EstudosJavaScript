//Sistem de Pedidos de uma Lanchonete
const prompt = require("prompt-sync")();

console.log("---CARDÀPIO---");
console.log("1 - Hamburguer");
console.log("2 - salada");
console.log("3 - pizza");

const quantPedidos = parseInt(prompt("quantos pedidos você quer? "));

for (let i = 1; i <= quantPedidos; i++) {
    console.log(`--- PEDIDO ${i} ---`)
    const numeroPrato = parseInt(prompt("qual o numero do prato que deseja pedir? "));

    const batata = prompt("Você quer batata?(S/N): ").toLowerCase();
    let statusBatata = batata == "sim" || batata == "s" ? "com batata" : "sem batata";

    const bebida = prompt("tamanho da bebida(P/M/G)? ");
    let pratoNome;

    switch(numeroPrato) {
        case 1: 
        pratoNome = "Hamburguer";
        break;
        case 2: 
        pratoNome = "Salada";
        break;
        case 3: 
        pratoNome = "Pizza";
        break;
    }
    let bebidaTexto;

    if (bebida == "P") {
        bebidaTexto = "bebida pequena";
    } else if (bebida == "M") {
        bebidaTexto = "bebida média";
    } else if (bebida == "G") {
        bebidaTexto = "bebida grande";
    } else {
        console.log("tamanho de bebida não dispinível...")
    }

    console.log(`${pratoNome} ${statusBatata} e ${bebidaTexto}`)
    
}


