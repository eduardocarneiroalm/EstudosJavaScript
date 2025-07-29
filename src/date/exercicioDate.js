class Evento {
    constructor(titulo, descricao, data) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date(data);
    };

    estaProximo() {
        const hoje = new Date();
        const seteDias = 7 * 24 * 60 * 1000;
        return this.data.getTime() - hoje.getTime() <= seteDias;
    }
    
    formatarData() {
        return this.data.toLocaleDateString('pt-BR');

    }
    exibir() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Data: ${this.formatarData()}`);
        console.log(`Evento próximo: ${this.estaProximo() ? 'Sim' : 'Não'}`);
        console.log('--------------------------');
    }
}

// Criando eventos
const evento1 = new Evento("Hackathon", "Evento de programação", new Date());
const evento2 = new Evento("Conferência Dev", "Conferência sobre desenvolvimento", new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)); // daqui a 5 dias
const evento3 = new Evento("Lançamento de Projeto", "Lançamento oficial", new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)); // daqui a 15 dias

// Exibindo eventos
evento1.exibir();
evento2.exibir();
evento3.exibir();