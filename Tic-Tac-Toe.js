var playerTurn = 0;
const GameBoard = () => {
    board = [
        "","","",
        "","","",
        "","",""
    ]
    return board;

};

const GameController = () => {

};

const Player = (num) => {
    return num;
};

function render(){

    for(i = 0; i<=3;i++){
        for(j = 0; j<=3;j++){

        }  
    }

}
function updateArray(){
    
    for(j = 0; j<9;j++){
        
        board[j] = (document.querySelector(`#cell${j + 1}`)).innerHTML;

    }  
    console.log(board);
    
}
tableCells = document.querySelectorAll("td");
tableCells.forEach((cell) => {
    
    cell.addEventListener('click',(e) => {
        if(playerTurn == 0 && cell.innerHTML == " "){
            console.log("X")
            cell.innerHTML = "X";
            playerTurn = 1;
          
        }
        if(playerTurn == 1 && cell.innerHTML == " "){
            console.log("O");
            cell.innerHTML = "O";
            playerTurn = 0;
            
        }
        updateArray();
        if(checkWin(board)){
           if(playerTurn == 1){
                console.log("Player 1 Wins");
            }
            else{
                console.log("Player 2 Wins");
            }
        }
        
        render();
    });
});
resetBtn = document.getElementById("Reset");
resetBtn.addEventListener('click',ResetBoard);

function ResetBoard(){
    for(j = 0; j<9;j++){
        (document.querySelector(`#cell${j + 1}`)).innerHTML = " ";
    }

}

function checkWin(){
    //123
    if(board[0] == board[1] && board[1]==board[2] && board[0] != " "){
        return true;
    }
    //456
    if(board[3] == board[4] && board[4]==board[5] && board[4] != " "){
        return true;
    }
    //789
    if(board[6] == board[7]&& board[7]==board[8] && board[7] != " "){
        return true;
    }
    //147
    if(board[0] == board[3]&& board[3]==board[6] && board[6] != " "){
        return true;
    }
    //258
    if(board[1] == board[4]&& board[4] ==board[7] && board[7] != " "){
        return true;
    }
    //369
    if(board[2] == board[5]&& board[5]==board[8] && board[5] != " "){
        return true;
    }
    //diagonals
    if(board[0] == board[4]&& board[4]==board[8] && board[0] != " "){
        return true;
    }
    if(board[2] == board[4]&& board[4]==board[6] && board[2] != " "){
        return true;
    }

}

const player1 = Player(1);
const player2 = Player(2);
const gameBoard = GameBoard();

