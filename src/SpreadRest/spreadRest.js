// //spred e Rest
// // ...obj

// const player = {
//     nickname: "Carlos",
//     health: 20, 
//     isDead: false, 
//     XP: 0,
//     // criando um método
//     present(){
//         console.log("Meu nick é", this.nickname);
//     }
// }

// function updatePlayer(player, newProps) {
//     return { ...player, ...newProps}

// }

// const updatedPlayer = updatePlayer(player, {
//     nickname: "Juliano",
//     coins: 10
// })

// console.log(updatedPlayer)


// Exercício 1
//Rest
function time(tecnico, ...jogadores) {
    return {
        tecnico,
        jogadores
    };
}

const time1 = time("Carlos", "Jorge", "Juliano",)
console.log(time1);

//Spread
const novosJogadores = ["Eduardo", "Thiago", "Ricardo"]

const time2 = {...time1, ...novosJogadores}

console.log(time2)
