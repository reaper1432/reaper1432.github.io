// Отваря друга страница 
// function doSomething(){
//       alert('this one works too!'); 
//       window.location.href = "quizResults.html";
//     }

// запазва времето когато се зареди страницата

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  var question = "";
  var question1 = "";
  var question2 = "";
  var question3 = "";
  var question4 = "";
  var question5 = "";
  var question6 = "";
  var question7 = "";
  var userScore;
  var imageAnswer;
  var sec = 0;
  var finalSec = 0;


  //  Смяна на въпросите
      function nextQuestion1() { 
      document.getElementById("questionsBlock2").style.animation = "slideInLeft 2s";
      // document.getElementById("questionsBlock1").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock2").style.visibility='visible';
      document.getElementById("questionsBlock1").style.visibility='hidden';
      }
      function nextQuestion2() {
      document.getElementById("questionsBlock3").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock2").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock3").style.visibility='visible';
      document.getElementById("questionsBlock2").style.visibility='hidden';
      }   
     function nextQuestion3() {
      document.getElementById("questionsBlock4").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock3").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock4").style.visibility='visible';
      document.getElementById("questionsBlock3").style.visibility='hidden';
     }
     function nextQuestion4() {
      document.getElementById("questionsBlock5").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock4").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock5").style.visibility='visible';
      document.getElementById("questionsBlock4").style.visibility='hidden';
     }
     function nextQuestion5() {
      document.getElementById("questionsBlock6").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock5").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock6").style.visibility='visible';
      document.getElementById("questionsBlock5").style.visibility='hidden';
     }
     function nextQuestion6() {
      document.getElementById("questionsBlock7").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock6").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock7").style.visibility='visible';
      document.getElementById("questionsBlock6").style.visibility='hidden';
     }
     function nextQuestion7() {
      document.getElementById("questionsBlock8").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock7").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock8").style.visibility='visible';
      document.getElementById("questionsBlock7").style.visibility='hidden';
     }
     function nextQuestion8() {
      document.getElementById("questionsBlock9").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock8").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock9").style.visibility='visible';
      document.getElementById("questionsBlock8").style.visibility='hidden';
     }
     function nextQuestion9() {
      document.getElementById("questionsBlock10").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock9").style.animation = "slideOutRight 2s";    
      document.getElementById("questionsBlock10").style.visibility='visible';
      document.getElementById("questionsBlock9").style.visibility='hidden';
     }
     
  function timer() {
      sec++;
      console.log(sec);
  }
 clock = window.setInterval(timer, 1000);

  function userResults() {
      clearInterval(clock);
      finalSec = sec;
      console.log(finalSec);
      // document.getElementById("overLay").style.display = "block";
      // запазване на отговорите на потребителя в променлива userScore
      userScore = 0;
      // запазване на стойността на радио бутона в променлива question1,2,3,4,5
      question1 = document.querySelector('input[name="answer1"]:checked').value
      question2 = document.querySelector('input[name="answer2"]:checked').value
      question3 = document.querySelector('input[name="answer3"]:checked').value
      question4 = document.querySelector('input[name="answer4"]:checked').value
      question5 = document.querySelector('input[name="answer5"]:checked').value
      question6 = document.querySelector('input[name="answer6"]:checked').value
      question7 = document.querySelector('input[name="answer7"]:checked').value
      question8 = document.querySelector('input[name="answer8"]:checked').value
      question9 = document.querySelector('input[name="answer9"]:checked').value
      question10 = document.querySelector('input[name="answer10"]:checked').value
//    При верен отговор
      if (question1 === "right") {
          userScore = userScore + 5;
      }
      if (question2 === "right") {
        userScore = userScore + 5;
    }
     if (question3 === "right") {
          userScore = userScore + 5;
      }
      if (question4 === "right") {
        userScore = userScore + 5;
    }
    if (question5 === "right") {
        userScore = userScore + 5;
    }
    if (question6 === "right") {
        userScore = userScore + 5;
    }
    if (question7 === "right") {
        userScore = userScore + 5;
    }
    if (question8 === "right") {
        userScore = userScore + 5;
    }
    if (question9 === "right") {
        userScore = userScore + 5;
    }
    if (question10 === "right") {
        userScore = userScore + 5;
    }
      console.log(userScore);

      var minutes = Math.floor(finalSec / 60);
      mnts = minutes + " minutes"
      if (minutes === 0) {
          mnts = " ";
          seconds = finalSec;
      }
      var seconds = finalSec - minutes * 60;
      scds = seconds + " seconds"
      userScore = (userScore * 100) / 50;
      // Показва резултатите
      document.getElementById("resultsBlock").style.animation = "slideInLeft 2s";
      document.getElementById("questionsBlock10").style.animation = "slideOutRight 2s";    
      document.getElementById("resultsBlock").style.visibility='visible';
      document.getElementById("questionsBlock10").style.visibility='hidden';
      
  
   // document.getElementById("imageField").src = imageAnswer;      
      document.getElementById("resultsField").style.visibility='visible';
      document.getElementById("resultsField").innerHTML += 'Your score is: ' + userScore + "%" + "<br>" + "Your time is: " + mnts + scds;
      document.getElementById("resultsButton").style.visibility='hidden';
      document.getElementById("clearButton").style.visibility='visible';
      if (userScore <= 95) {
        document.getElementById("answersList").style.visibility='visible';
      }         
  }
//  Показва правилните отговори
  function seeAnswers() {
    document.getElementById("answersList").style.visibility='hidden';
        if (question1 === "wrong") {
            document.getElementById("answers").innerHTML += "1. 'We'll walk this road together, through the storm' is from " + "Eminem - Not Afraid" + "<br>";
        }
        if (question2 === "wrong") {
            document.getElementById("answers").innerHTML += "2. 'My mama don't like you and she likes everyone' is from " + "Justin Bieber - Love Yourself" + "<br>";
        }
        if (question3 === "wrong") {
            document.getElementById("answers").innerHTML += "3. 'I never miss a beat, I'm lightning on my feet' is from " + "Taylor Swift - Shake It Off" + "<br>";
        }
        if (question4 === "wrong") {
            document.getElementById("answers").innerHTML += "4. 'Girl, you know I want your love' is from " + "Ed Sheeran - Shape of You" + "<br>";
        }
        if (question5 === "wrong") {
            document.getElementById("answers").innerHTML += "5. 'Diamonds ain't nothing when I'm rockin' with ya' is from " + "DJ Khaled – Wild Thoughts" + "<br>";
        }
        if (question6 === "wrong") {
            document.getElementById("answers").innerHTML += "6. 'Don't let him in, you'll have to kick him out again' is from " + "Dua Lipa - New Rules" + "<br>";
        }
        if (question7 === "wrong") {
            document.getElementById("answers").innerHTML += "7. 'Make me wanna savor every moment slowly, slowly' is from " + "Luis Fonsi and Daddy Yankee feat. Justin Bieber - Despacito" + "<br>";
        }
        if (question8 === "wrong") {
            document.getElementById("answers").innerHTML += "8. 'You are unforgettable, I wanna get you alone' is from " + "French Montana ft. Swae Lee - Unforgettable" + "<br>";
        }
        if (question9 === "wrong") {
            document.getElementById("answers").innerHTML += "9. 'Honey, I rose up from the dead, I do it all the time' is from " + "Taylor Swift - Look What You Made Me Do" + "<br>";
        }
        if (question10 === "wrong") {
            document.getElementById("answers").innerHTML += "10. 'To memorize the way you shock me, the way you move it here' is from " + "Calvin Harris ft. Pharrell Williams, Katy Perry and Big Sean - Feels" + "<br>";
        }
  }
  function clearResults() {
      location.reload();
       $(document).ready(function(){
      $(window).scrollTop(0);
  });
  }
 
  
    
  
  
  