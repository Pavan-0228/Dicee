let A = Math.floor( Math.random()*6+1);

let imagesnumber1 = "images/dice"+A+".png"

let images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", imagesnumber1);
 
 


let B = Math.floor( Math.random()*6+1);
 
let imagesnumber2 = "images/dice"+B+".png"

let images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", imagesnumber2);



if(A>B){
    document.querySelector('h1').textContent="🚩Player 1 win";
}
else if(A<B){
    document.querySelector('h1').textContent="Player 2 win🚩";
}
else{
    document.querySelector('h1').textContent="Draw";
}