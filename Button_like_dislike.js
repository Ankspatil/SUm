function clickcounter(){

if(typeof(Storage) !== "undefinded")
{
if(localStorage.clickcount)
{
    localStorage.clickcount = Number(localStorage.clickcount) +1 ;

}
else{
    localStorage.clickcount = 1 ;
}
    document.getElementById("result").innerHTML = "Like" + 
    localStorage.clickcount + "";
}
}











function clickcounter_dislike(){

    if(typeof(Storage) )
    {
    if(localStorage.clickcount)
    {
        localStorage.clickcount = Number(localStorage.clickcount) -1 ;
    
    }
    else{
        localStorage.clickcount = 1 ;
    }
        document.getElementById("result1").innerHTML = "Dislike" + 
        localStorage.clickcount + "";
    }
    }




