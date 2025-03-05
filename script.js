let strong=document.getElementsByTagName("strong")
function highlight() {
    //Write your code here
    for(let i=0;i<strong.length;i++){
        strong[i].style.color="rgb(0, 128, 0)";
    }


}


function return_normal() {
    //Write your code here
    for(let i=0;i<strong.length;i++){
        strong[i].style.color="rgb(0, 0, 0)";
    }
}
