var n1 = Math.floor( Math.random() * 6) + 1;
var n2 = Math.floor( Math.random() * 6) + 1;
var dice_img1 = "dice" + n1 + ".png";
var dice_img2 = "dice" + n2 + ".png";
if(n1>n2)
{
    document.querySelector("h1").textContent="🚩Player1 Wins!";
}
else if(n1===n2)
{
    document.querySelector("h1").textContent="Draw";   
}
else{
    document.querySelector("h1").textContent="🚩Player2 Wins!";
}

document.querySelectorAll("img")[0].setAttribute("src",dice_img1);
document.querySelectorAll("img")[1].setAttribute("src",dice_img2);