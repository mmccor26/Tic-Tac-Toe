var playerTurn = 0;
const GameBoard = () => {
    board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]

};

const GameController = () => {

};

const Player = (num) => {
    return num;
};

function render(){

    for(i = 0; i<=3;i++){
        for(i = 0; i<=3;i++){

        }  
    }

}

tableCells = document.querySelectorAll("td");
tableCells.forEach((cell) => {
    cell.addEventListener('click',(e) => {
        if(playerTurn == 0){
            console.log("X")
            cell.innerHTML = "X";
            playerTurn = 1;
        }
        else{
            console.log("O");
            cell.innerHTML = "O";
            playerTurn = 0;
        }
        
        
        render();
    });
});

function checkWin(array){
    
}

const player1 = Player(1);
const player2 = Player(2);

