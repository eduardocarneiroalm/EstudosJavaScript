const prompt = require("prompt-sync")();
console.log("Hello World!");

//variáveis - aramazena um tipo de valor

//var - ele é global, pode ser usado em outro escopo

// {var nome = "Carneiro"}
// console.log(nome) -> isso vai funcionar pq o var está em outro escopo, mas se fosse let ou const não ia funcionar, por causa das {}.


// let nome = "Eduardo"

// const meuNome = "Carlos"
// console.log(meuNome)
// console.log(nome)

// // pode guardar em variáveis - pode usar qualquer tipo de variável
// const string = "Este é um texto";
// const number = 22;
// const boolean = true;
// const array = [];
// const object = {};
// const func = () => {}
// const date = new Date();

// const name = prompt("qual o nome do aluno? ");
// const primaryNote = parseFloat(prompt("Qual a primeiro nota do aluno? "));
// const secondNote = parseFloat(prompt("Qual a segunda nota do aluno? "));

// const aritmeticMedia = (primaryNote + secondNote) / 2;

// const result = aritmeticMedia >= 6;

// console.log(`O Aluno ${name} obteve a nota ${aritmeticMedia}. Aprovado: ${result}`);

// const nome = prompt("qual o seu nome? ");
// const price = parseFloat(prompt("Qual o valor do produto? "));
// const descont = parseInt(prompt("quanto de desconto está esse produto? "));

// const descontValue = (price * descont) / 100;
// const finalValue = price - descontValue;

// console.log(`Olá! ${name}, o valor inicial do seu produto foi de ${price} reais, o valor com desconto é de ${finalValue} reais.`)


// const name = prompt("qual o nome do passageiro? ");
// const distance = parseInt(prompt("qual a distancia da viagem? "));
// const carConsume = parseInt(prompt("qual a média de gasto de km por litro? "));
// const priceFuel = parseFloat(prompt("qual o preço do combustível? "));

// const gastoLitro = distance / carConsume;
// const custoTotal = gastoLitro * priceFuel;

// console.log(`Olá ${name}, para percorrer ${distance}km, você precisará de ${gastoLitro} litros de combustivel.
//     o custo total da viagem será de R$${custoTotal}`);
