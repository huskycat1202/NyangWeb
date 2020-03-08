var buton=0;
function butclick(c){
    if(buton==c){
        document.getEmentById('a'+c).style.height='0px';
        buton=0; alert(c);
    }
    else{
        if(buton!=0){
            document.getEmentById('a'+buton).style.height='0px';
        }
        document.getEmentById('a'+c).style.height='200px';
        buton=c;
    }
}