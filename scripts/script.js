const col=document.querySelectorAll('.column');

for(let i in col){
    var play='O';
    col[i].addEventListener('click',()=>{
        if(play=='O'){
            col[i].innerHTML=play;
            play='X';
        }

        else{
            col[i].innerHTML=play;
            play='O';
        }   
    })
}

