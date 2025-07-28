//promise
const prompt = require("prompt-sync")();

function validarNome(nome){
    return new Promise((res, rej) => {
        if (!nome || nome == "") {
            return rej("nome inválido!")
        }
        return res("nome válido!")
    })
}

async function cadastrarUsuário() {
    const nomePessoa = prompt("Qual o seu nome? ")

    try{
    const request = await validarNome(nomePessoa);
    console.log(request)
    console.log("Aguardando resposta do Banco de Dados...")
    setTimeout(() => {
        console.log("Nome guardado no banco de dados com sucesso!")
        
    }, 2000)
    
    } catch (err) {
        console.log(err)
    }
}

cadastrarUsuário();

// function requestCar(drivers) {
//     return new Promise((resolve, reject) => {
//         if (drivers > 0) {
//             return resolve("Seu motorista está acaminho!")
//         }
//         return reject("Não há motoristas disponínveis")
//     });
// }

// async function main () {
//     let drivers = 2;

//     const request = await requestCar(drivers);

//     console.log(request)

// } main();

