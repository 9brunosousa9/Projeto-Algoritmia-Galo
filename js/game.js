// O meu tabuleiro
let tab = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Nomes do jogadores
let name1, name2
let turn = 1
let piece = "X"

function changeTurn(id, l, c) {

    //verificar se a posicao esta ocupapda
    if (tab[l][c]!="") {
        alert("Posicao ocupada!")
    } else {
        // posicionar a peça no array
        document.querySelector(id).innerHTML = piece
        tab[l][c] = piece
        if (checkWin() === true) { 
            alert(`Ganhaste ${name1}!`) 
                alert(`Ganhaste ${name2}!`); 
            }    
        }  {
            if (turn == 1) {
                turn = 2
                piece = "0"
            } else {
                turn = 1
                piece = "X"
            }
        }
    }

function checkWin() {
    console.table(tab);

    if (
        (tab[0][0] == piece && tab[0][1] == piece && tab[0][2] == piece) ||
        (tab[1][0] == piece && tab[1][1] == piece && tab[1][2] == piece) ||
        (tab[2][0] == piece && tab[2][1] == piece && tab[2][2] == piece) ||
        (tab[0][0] == piece && tab[1][0] == piece && tab[2][0] == piece) ||
        (tab[0][1] == piece && tab[1][1] == piece && tab[2][1] == piece) ||
        (tab[0][2] == piece && tab[1][2] == piece && tab[2][2] == piece) ||
        (tab[0][0] == piece && tab[1][1] == piece && tab[2][2] == piece) ||
        (tab[0][2] == piece && tab[1][1] == piece && tab[2][0] == piece)) {        
        return true
    }
    return false;
}


/**
 * Preencher o tabuleiro inicialmente
 * Posições vazias são inicializadas com ""
 */
function createTab() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tab[i][j] = ""
        }
    }
}

/**
 * Pede o nome aos dois jogadores
 */
function getUserNames() {
    name1 = prompt("Nome do Jogador1?")
    name2 = prompt("Nome do Jogador2?")
    document.querySelector("#pJogador1").innerHTML = name1
    document.querySelector("#pJogador2").innerHTML = name2
}


document.querySelector("#pos1").addEventListener("click",
    function () {        
        changeTurn("#pos1", 0, 0)

    })
document.querySelector("#pos2").addEventListener("click",
    function () {        
        changeTurn("#pos2", 0, 1)
    })

document.querySelector("#pos3").addEventListener("click",
    function () {        
        changeTurn("#pos3", 0, 2)
    })

document.querySelector("#pos4").addEventListener("click",
    function () {        
        changeTurn("#pos4", 1, 0)
    })

document.querySelector("#pos5").addEventListener("click",
    function () {
        changeTurn("#pos5", 1, 1)
    })

document.querySelector("#pos6").addEventListener("click",
    function () {        
        changeTurn("#pos6", 1, 2)
    })

document.querySelector("#pos7").addEventListener("click",
    function () {        
        changeTurn("#pos7", 2, 0)
    })

document.querySelector("#pos8").addEventListener("click",
    function () {        
        changeTurn("#pos8", 2, 1)
    })

document.querySelector("#pos9").addEventListener("click",
    function () {        
        changeTurn("#pos9", 2, 2)
    })

createTab()
getUserNames()

