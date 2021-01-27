var score = 0;

function update(){
    score = score + 1 ;
    document.getElementById("score").innerHTML = "Score : " + score;
}

function save(){
    localStorage.setItem("scorekey" , score);
}

function nextpage(){
    window.location = "activity_2.html";
}

