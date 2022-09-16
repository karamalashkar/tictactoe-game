//connect to html tags
const col=document.querySelectorAll('.column');
const win=document.querySelector('#win');
const start=document.querySelector('#start');
const image=document.querySelectorAll('.image');
const board=['1','2','3','4','5','6','7','8','9']; //to save each state of entry
let winner=''; //specify the winner type 
var gameOver=true; //know if game start
var play='assets/red.png';

//restart the game 
start.addEventListener('click',()=>{
    location.reload();
})


for(let i in col){
    col[i].addEventListener('click',()=>{ //add event listener for each entry
    
    if(gameOver){ //check if game is on
        if(play=='assets/red.png'){ //check the state and save to board 
            image[i].style.display='block';
            image[i].scr=play;
            board[i]=play;
            play='assets/yellow.png';
        }

        else{ //check the state and save to board
            image[i].style.display='block';
            image[i].src=play;
            board[i]=play;
            play='assets/red.png';
        }   

        //disable pressed entry
        col[i].classList.add('pointer');

        //check the win state and print the winner
        if(board[0]==board[1] && board[1]==board[2] && board[1]==board[2]){
            if(board[0]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[3]==board[4] && board[3]==board[5] && board[4]==board[5]){
            if(board[3]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[6]==board[7] && board[6]==board[8] && board[7]==board[8]){
            if(board[6]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[0]==board[3] && board[0]==board[6] && board[3]==board[6]){
            if(board[0]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[1]==board[4] && board[1]==board[7] && board[4]==board[7]){
            if(board[1]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[2]==board[5] && board[2]==board[8] && board[5]==board[8]){
            if(board[2]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[0]==board[4] && board[0]==board[8] && board[4]==board[8]){
            if(board[0]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }

        else if(board[2]==board[4] && board[2]==board[6] && board[4]==board[6]){
            if(board[2]=='assets/red.png'){
                winner='Red';
            }
            else{
                winner='Yellow';
            }

            win.innerHTML=`Winner player ${winner}`;
            gameOver=false;
        }
    } 
    })
}

