 var randomNumber1=Math.random();
 randomNumber1=Math.floor(randomNumber1*6 + 1);
var image1Address= "images/dice" + randomNumber1 + ".png";
var image1= document.querySelector(".img1");
image1.setAttribute("src",image1Address);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6 + 1);
var image2Address= "images/dice" + randomNumber2 + ".png";
var image2= document.querySelector(".img2");
image2.setAttribute("src",image2Address);

var result=document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    result.innerHTML= "KD wins🚩"
}
else if (randomNumber1<randomNumber2) {
    result.innerHTML= "Vishwas wins🚩"
}

else{
    result.innerHTML= "Draw"
}
