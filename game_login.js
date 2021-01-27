function addUser(){
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;

    localStorage.setItem("player1_namekey" , player1_name);
    localStorage.setItem("player2_namekey" , player2_name);

    window.location = "game_page.html";
}