// objetos

const player = {
    nickname: "Carlos",
    health: 20, 
    isDead: false, 
    XP: 0,
    // criando um método
    present(){
        console.log("Meu nick é", this.nickname);
    }
}

player.present()
console.log(player["nickname"])

const computer = {
    motherboard: "B360M",
    videoboard: "RTX 4090",
    font: {
        name: "Corsair",
        watts: 600
    },
    ram: [1, 2, 3]
}

console.log(computer.font.name)
/*
Formas de acessar métodos e propriedades:

player.nickname
player["nickname"]

*/

