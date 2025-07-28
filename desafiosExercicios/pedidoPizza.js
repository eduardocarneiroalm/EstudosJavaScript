function prepararPizza(sabor, callback) {
    console.log(`pedido recebido: ${sabor}. Preparando...`)

    setTimeout(() => {
        console.log(`${sabor} pronta!`)
        callback();
    }, 2000);
}

function avisarPedido(){
    console.log("Sua pizza está pronta para retirada!")
}

prepararPizza("Calabresa", avisarPedido);