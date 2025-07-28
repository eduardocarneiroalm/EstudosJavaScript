const prompt = require("prompt-sync")();

const nome = prompt("qual o nome do cliente? ");
const preco = parseFloat(prompt("qual o preço do produto? "));
const pagamento = prompt("qual forma de pagamento? débito ou crédito? ");

if (pagamento === "debito") {
    const desconto = 10;
    const valorFinal = (preco * desconto) / 100;
    const valorFinalProduto = preco - valorFinal;

    console.log("Valor final com débito: ", valorFinalProduto);
     
} else if (pagamento === "credito") {
    const quantidadeParcelas = parseInt(prompt("Qual a quantidade de parcelas que você quer? "));

    if (quantidadeParcelas > 6) {
        const juros = (preco * 8) / 100;
        const valorParcelafinal = preco + juros;
        const parcelas = valorParcelafinal / quantidadeParcelas;

        console.log("quantidade de parcelas: ", quantidadeParcelas);
        console.log("Valor final com as parcelas: ", valorParcelafinal);
        console.log("valor de cada parcela: ", parcelas);

    } else if (quantidadeParcelas === 6) {
        const cadaParcelaSemJuros = preco / quantidadeParcelas;
       const valorFinalSemParcela = preco;

       console.log("quantidade de parcelas: ", quantidadeParcelas);
       console.log("Valor final sem parcelas: ", valorFinalSemParcela);
       console.log("valor de cada parcela: ", cadaParcelaSemJuros);
    }
}
console.log("nome do Cliente: ", nome);