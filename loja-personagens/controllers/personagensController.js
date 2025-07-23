import { descontoPersonagens } from "../utils/calculadora.js";
import { brawlers } from "../data/personagens.js";

export function listaPersonagens() {
    return brawlers;
}

export function encontrarPersonagem(nome) {
    const nomeNormalizado = nome.toLowerCase();
    for (const personagem of brawlers) {
        const nomeMinusculo = personagem.name.toLowerCase();
        if (nomeNormalizado === nomeMinusculo) {
            return personagem;
        }
    }
};

export function comprarPersonagem(nome, desconto) {
    const personagem = encontrarPersonagem(nome);
    if (!personagem) return `Personagem ${nome} não encontrado.`;

    const precoPersonagem = personagem.price;
    const precoFinal = descontoPersonagens(precoPersonagem, desconto);

    return `Você comprou ${nome} do tipo (${personagem.type}) com ${desconto}% de desconto. Valor final: R$${precoFinal}`;
}