// Funções

const prompt = require("prompt-sync")();
// function identificador() {}

// function greet(name) {
//     console.log("Seja bem vindo(a)", name)
// }

// greet("Eduardo");



function CalcularPrecoFinal(precoProduto, formaPagamento, quantidadeParcelas) {
    if (formaPagamento == "pix" || formaPagamento == "debito") {
        const desconto = (precoProduto * 15) / 100;
        return `o valor do produto é ${precoProduto - desconto}, sem parcelas` ;

        
    } else if (formaPagamento == "parcelado" || formaPagamento == "credito") {
        if (quantidadeParcelas == 2) {
            return `valor do produto R$${precoProduto} com as parcelas de R$${precoProduto / 2}`;

        } else if (quantidadeParcelas > 2) {
            const juros = (precoProduto * 5) / 100;
            const valorParcelas = (precoProduto + juros) / quantidadeParcelas;
            const predutoComJuros = precoProduto + juros;
            
            return `valor do produto com juros é de R$${predutoComJuros} o valor de cada parcela é R$${valorParcelas}`;
        }
    }
}

const perguntaValor = parseFloat(prompt("qual o valor do produto? "));
const perguntaPagamento = prompt("Qual a forma de pagamento? ");
const numParcelas = parseInt(prompt("qual o numero de parcelas? "));

console.log(CalcularPrecoFinal(perguntaValor, perguntaPagamento, numParcelas));