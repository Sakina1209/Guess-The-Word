 player1_value = localStorage.getItem("player1_namekey");
 player2_value = localStorage.getItem("player2_namekey");

 player1_score = 0;
 player2_score = 0;

 document.getElementById("player1_name").innerHTML = player1_value + " : " ;
 document.getElementById("player2_name").innerHTML = player2_value + " : " ;

 document.getElementById("player_score1").innerHTML = player1_score;
 document.getElementById("player_score2").innerHTML = player2_score;

 document.getElementById("player_question").innerHTML = "Question turn - " + player1_value;
 document.getElementById("player_answer").innerHTML = "Answer turn - "  + player2_value;

 function send(){
     get_word = document.getElementById("word").value;
     word = get_word.toLowerCase();

     console.log("word in lower case - " + word);

     charAt1 = word.charAt(1);
     console.log(charAt1)

     index_middle = Math.floor(word.length/2);
     charAt2 = word.charAt(index_middle);
     console.log(charAt2);

     index_last = word.length - 1;
     charAt3 = word.charAt(index_last);
     console.log(charAt3);

     charAt1 = word.replace(charAt1 , "_");
     charAt2 = charAt1.replace(charAt2 , "_");
     charAt3 = charAt2.replace(charAt3 , "_");
     console.log(charAt3);

     question_word = "<h4 id='word_display' > Q. " + charAt3 + "</h4>" ;
     answer = "<h4> Answer - <input type='text' id='word_check' > "; 
     button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button> "; 

     row = question_word + answer + button; 

     document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";
 }

 question_turn = "player1";
 answer_turn = "player2";

 function check(){
     get_answer = document.getElementById("word_check").value;
     answer2 = get_answer.toLowerCase();
     console.log(answer2);

     if (answer2 == word){

        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player_score1").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player_score2").innerHTML = player2_score;
        }

     }

     if (question_turn == "player1"){
         question_turn = "player2";
         document.getElementById("player_question").innerHTML = "Question Turn - " + player2_value;
     }
     else{
         question_turn = "player1";
         document.getElementById("player_question").innerHTML = "Question Turn - " + player1_value;
     }

     if (answer_turn == "player1"){
         answer_turn = "player2";
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_value;
     }
     else {
         answer_turn = "player1";
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_value;
     }

     document.getElementById("output").innerHTML = "";
 }