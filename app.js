let gameSeq = [];
let userSeq = [];

let btns = ["blue","red","purple","green"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
       console.log("game started");
       start = true;
       levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn); //random button
}
function checkAns(idx){
    console.log("current level:",level);
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to Start.`;
        // document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "red";
        },50);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    console.log("btn was pressed");
    userColor = btn.getAttribute("id"); //to access color from each button
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".box");
for(box of allBtns){
    box.addEventListener("click",btnPress);
}
function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    document.querySelector("body").style.backgroundColor = "white";
}
