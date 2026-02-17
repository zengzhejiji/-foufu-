const name_i = "zuozheSB";
const password_i = "SB";
function fn(){
let you_n = document.getElementById("1001").value;
let you_p = document.getElementById("1002").value;
if(you_n === name_i && you_p === password_i){
    location.href = "首页.html"
}else{
    alert("No")
}
}