function contruirTime(tecnico, ...jogadores) {
    return {
        tecnico,
        jogadores
    }
}

function criarCadastro(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
            console.log("cadastro dos jogadores concluidos!")
        }, 2000);
    })
}

function mostrarTime(time) {
    console.log(time)
}

const timeBase = contruirTime("Carlos", "Jorge", "Lucas", "Evandro");
criarCadastro(timeBase)
.then((time) => mostrarTime(time))
.catch((err) => console.log(err));

//Spread
const novoTime = ["Ricardo", "Vitor"]
const timeAtualizado = {...timeBase.jogadores, ...novoTime}

setTimeout(() => {
    console.log("📣 Novo time com reforços:");
    console.log(timeAtualizado);
}, 3000)