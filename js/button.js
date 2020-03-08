var buton=0;
function butclick(c){
    if(buton==c){
        document.getElementById('a'+c).style.height='66px';
        buton=0;
    }
    else{
        if(buton!=0){
            document.getElementById('a'+buton).style.height='66px';
        }
        document.getElementById('a'+c).style.height='200px';
        buton=c;
    }
}