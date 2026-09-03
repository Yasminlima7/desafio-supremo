const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playlist = [
    "Numb",
    "In The End",
    "Enter Sandman",
    "Fear of the Dark",
    "Breaking the Law",
    "Master of Puppets",
    "The Trooper",
    "Paranoid"
];

function pesquisarMusica() {
    rl.question("Digite o nome da musica: ", (nome) => {
        if (playlist.includes(nome)) {
            let pos = playlist.indexOf(nome);
            console.log(`Musica encontrada na posicao ${pos}`);
        } else {
            console.log("Musica nao encontrada");
        }
        menu();
    });
}

function criarSelecao() {
    rl.question("Posicao inicial: ", (p1) => {
        rl.question("Posicao final: ", (p2) => {
            let inicio = parseInt(p1);
            let fim = parseInt(p2);
            let selecao = playlist.slice(inicio, fim + 1);
            console.log("Selecao gerada:", selecao.join(" | "));
            menu();
        });
    });
}

function removerMusica() {
    rl.question("Posicao da musica a remover: ", (pos) => {
        let index = parseInt(pos);
        if (index >= 0 && index < playlist.length) {
            console.log(`Removendo: ${playlist[index]}`);
            playlist.splice(index, 1);
        } else {
            console.log("Posicao invalida");
        }
        menu();
    });
}

function inserirMusica() {
    rl.question("Nome da musica: ", (nome) => {
        rl.question("Posicao de insercao: ", (pos) => {
            let index = parseInt(pos);
            playlist.splice(index, 0, nome);
            console.log(`Musica "${nome}" inserida na posicao ${index}`);
            menu();
        });
    });
}

function organizarPlaylist() {
    playlist.sort();
    console.log("Playlist organizada em ordem alfabetica");
    menu();
}

function inverterPlaylist() {
    playlist.reverse();
    console.log("Playlist invertida");
    menu();
}

function exibirPlaylist() {
    let resultado = playlist.join(" | ");
    console.log("Playlist atual:");
    console.log(resultado);
    menu();
}

function menu() {
    console.log("\n-------------------------------------------");
    console.log("1-Pesquisar | 2-Selecao | 3-Remover | 4-Inserir");
    console.log("5-Organizar | 6-Inverter| 7-Exibir  | 0-Sair");
    console.log("-------------------------------------------");
   
    rl.question("Escolha uma opcao: ", (op) => {
        if (op === "1") pesquisarMusica();
        else if (op === "2") criarSelecao();
        else if (op === "3") removerMusica();
        else if (op === "4") inserirMusica();
        else if (op === "5") organizarPlaylist();
        else if (op === "6") inverterPlaylist();
        else if (op === "7") exibirPlaylist();
        else if (op === "0") rl.close();
        else {
            console.log("Opcao invalida");
            menu();
        }
    });
}

menu();
