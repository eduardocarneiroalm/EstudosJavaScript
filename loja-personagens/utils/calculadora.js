export function descontoPersonagens(valorPersonagem, descontoPersonagem) {
    const desconto = (valorPersonagem * descontoPersonagem) / 100;
    const valorFinalPersonagem = valorPersonagem - desconto;
    return valorFinalPersonagem;
}