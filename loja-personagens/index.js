import { listaPersonagens, comprarPersonagem } from "./controllers/personagensController.js";

console.log("Bem-Vindo à loja de personagens do brawlhalla!\n ")

console.log("Lista de personagens disponíveis: ")
console.table(listaPersonagens())

console.log("\nSimulando compra com desconto: ")
console.log(comprarPersonagem("Kaya", 20));
