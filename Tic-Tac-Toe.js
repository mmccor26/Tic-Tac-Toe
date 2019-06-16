var playerTurn = 0;
const GameBoard = () => {
    board = [
        ["","",""],
        ["","",""],
        ["","",""]
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
function updateArray(){
    cell1 = document.getElementById("cell1");
    cell2 = document.getElementById("cell2");
    cell3 = document.getElementById("cell3");
    cell4 = document.getElementById("cell4");
    cell5 = document.getElementById("cell5");
    cell6 = document.getElementById("cell6");
    cell7 = document.getElementById("cell7");
    cell8 = document.getElementById("cell8");
    cell9 = document.getElementById("cell9");
    board[0][0] = cell1.innerHTML;
    board[0][1] = cell1.innerHTML;
    board[0][2] = cell1.innerHTML;
    board[1][0] = cell1.innerHTML;
    board[1][1] = cell1.innerHTML;
    board[1][2] = cell1.innerHTML;
    board[2][0] = cell1.innerHTML;
    board[2][1] = cell1.innerHTML;
    board[2][2] = cell1.innerHTML;
    
}
tableCells = document.querySelectorAll("td");
tableCells.forEach((cell) => {
    
    cell.addEventListener('click',(e) => {
        if(playerTurn == 0 && cell.innerHTML == " "){
            console.log("X")
            cell.innerHTML = "X";
            playerTurn = 1;
        }
        else if(playerTurn == 1 && cell.innerHTML == " "){
            console.log("O");
            cell.innerHTML = "O";
            playerTurn = 0;
        }
        
        updateArray();
        console.log(board);
        
        
        render();
    });
});

function checkWin(array){
    //123
    if(array[0][0] == array[0][1]==array[0][2]){

    }
    //456
    if(array[1][0] == array[1][1]==array[1][2]){
        
    }
    //789
    if(array[2][0] == array[2][1]==array[2][2]){
        
    }
    //147
    if(array[0][0] == array[1][0]==array[2][0]){
        
    }
    //258
    if(array[0][1] == array[1][1]==array[2][1]){
        
    }
    //369
    if(array[0][2] == array[1][2]==array[2][2]){
        
    }
    //diagonals
    if(array[0][0] == array[1][1]==array[2][2]){
        
    }
    if(array[0][2] == array[1][1]==array[2][0]){
        
    }


    
    
}

const player1 = Player(1);
const player2 = Player(2);

