const personagens = [
    {
        name: "Kaya",
        health: 190,
        attack: 23
    },
    {
        name: "Teros",
        health: 250,
        attack: 25
    },
    {
        name: "Wu Shang",
        health: 180,
        attack: 20
    },
]

function batalhar(jogador1, jogador2) {
    jogador2.health -= jogador1.attack;
    console.log(`${jogador1.name} atacou ${jogador2.name} e causou ${jogador2.health} de dano`)

    console.log(`Mas ${jogador2.name} contra-atacou`)
    jogador1.health -= jogador2.attack;

    console.log(`e ${jogador2.name} atacou ${jogador1.name}, ficando com ${jogador1.health} de dano`)

    // console.log(`${jogador1.name} deu ${jogador1.attack} de dano no(a) ${jogador2.name}, e ficou com ${jogador2.health} de vida`)
}

batalhar(personagens[0], personagens[1])


