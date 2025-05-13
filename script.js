// Randomly decides whose turn it is at the beginning of the game.
let turn = Math.floor(Math.random()*2+1);
// makes the turns work!
function play(buttonId){
  if(document.getElementById(buttonId).innerHTML != "X" && document.getElementById(buttonId).innerHTML != "O"){
    if(turn == 1){
  document.getElementById("x-turn").innerHTML= "It is o's turn";
  document.getElementById(buttonId).innerHTML= "X";
  turn = 2;
}else{
  document.getElementById("x-turn").innerHTML= "It is x's turn";
  document.getElementById(buttonId).innerHTML= "O";
  turn = 1;
}
}
  console.log(document.getElementById(buttonId).innerHTML);
winOrLose();
}  

//resets the board
function reset(){
 turn = Math.floor(Math.random()*2+1);
if(turn == 1){
  document.getElementById("x-turn").innerHTML= "It is x's turn";

}else{
  document.getElementById("x-turn").innerHTML= "It is o's turn";
}
  let buttons = document.querySelectorAll("#TicTacToe table button");
  buttons.forEach(item=>{item.innerHTML = ""});
}
// determines if you WIN or you looose.
function winOrLose(){
  let board = [[document.getElementById("thing1").innerHTML,document.getElementById("thing2").innerHTML,document.getElementById("thing3").innerHTML],[document.getElementById("thing4").innerHTML,document.getElementById("thing5").innerHTML,document.getElementById("thing6").innerHTML],[document.getElementById("thing7").innerHTML,document.getElementById("thing8").innerHTML,document.getElementById("thing9").innerHTML]];
  for(i = 0; i < board.length; i++){
    if(board[i][0] == board[i][1]&& board[i][1] == board[i][2]&& board[i][0] == "X"){
      document.getElementById("x-turn").innerHTML = "X WINS!!!";
    }  
    if(board[i][0] == board[i][1]&&board[i][1] == board[i][2]&&board[i][0] == "O"){
      document.getElementById("x-turn").innerHTML = "O WINS!!!";
    }
    if(board[0][i] == board[1][i]&&board[1][i] == board[2][i]&&board[0][i] == "X"){
      document.getElementById("x-turn").innerHTML = "X WINS!!!";
    }  
    if(board[0][i] == board[1][i]&&board[1][i] == board[2][i]&&board[0][i] == "O"){
      document.getElementById("x-turn").innerHTML = "O WINS!!!" ; 
    }
  }
  if(board[0][0] == board[1][1]&&board[1][1] == board[2][2]&&board[0][0] == "X"){
      document.getElementById("x-turn").innerHTML = "X WINS!!!";
    }  
    if(board[0][0] == board[1][1]&&board[1][1] == board[2][2]&&board[0][0] == "O"){
      document.getElementById("x-turn").innerHTML = "O WINS!!!" ; 
    }
    if(board[0][2] == board[1][1]&&board[1][1] == board[2][0]&&board[0][2] == "X"){
      document.getElementById("x-turn").innerHTML = "X WINS!!!";
    }  
    if(board[0][2] == board[1][1]&&board[1][1] == board[2][0]&&board[0][2] == "O"){
      document.getElementById("x-turn").innerHTML = "O WINS!!!"  ;
    }
    if (boardFull() == true){
     if (document.getElementById("x-turn").innerHTML != "X WINS!!!" && document.getElementById("x-turn").innerHTML != "O WINS!!!"){
       document.getElementById("x-turn").innerHTML = "TIED Game!";
     }
    }
}
function boardFull(){
  let board = [document.getElementById("thing1").innerHTML,document.getElementById("thing2").innerHTML,document.getElementById("thing3").innerHTML,document.getElementById("thing4").innerHTML,document.getElementById("thing5").innerHTML,document.getElementById("thing6").innerHTML,document.getElementById("thing7").innerHTML,document.getElementById("thing8").innerHTML,document.getElementById("thing9").innerHTML];
  let isFull = true;
  for (let i=0;i<9;i++){
    if(board[i] != "X" && board[i] != "O"){
      isFull = false;
    }
  }
  return isFull
}
  reset()