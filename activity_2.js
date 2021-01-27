function back(){
    window.location = "activity_1.html";
}

function getscore(){
    scorevalue = localStorage.getItem("scorekey");
    document.getElementById("empty").innerHTML = "<h3> Score : " + scorevalue + "</h3>";
}