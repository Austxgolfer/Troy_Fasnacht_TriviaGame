var questions = [
  "The beaver is the national emblem of which country",
  "In which movie did Humphrey Bogart play Charlie Allnut?",
  "Which singer's real name is Stefani Joanne Angelina Germanotta?",
  "How many players are there in a baseball team?",
  "Which TV Character Said,'Live long and prosper'?",
  "What is the name of Batman's butler?",
  "The average human body contains how many pints of blood?",
  "Which US state is nearest to the old Soviet Union?",
  "In which city is Jim Morrison buried?",
  "`Hg' is the chemical symbol of which element?",
  "The Pyrenees mountain range separates which two European countries?",
  "According to Greek mythology who was the first woman on earth?",
  "What names were given to the three tunnels in the movie `The Great Escape`?",
  "Which US state's largest city is Baltimore?",
  "How is the groundnut better known?",
  "Which country was formerly known as Abyssinia?",
  "How many letters are there in the German alphabet?",
  "What is the most commonly diagnosed cancer in men?",
  "Who was the US president during World War I?",
  "In which 1979 movie was the spaceship called Nostromo?"
];
var answers = [
  ["Canada", "Alaska", "Norway", "Russia"],
  ["African Queen", "Casablanca", "The Caine Mutiny", "The Maltese Falcon"],
  ["Lady Gaga", "Gwenn Stefani", "Cher", "Cardi B"],
  ["9", "11", "25", "8"],
  ["Mr. Spock", "Mr. Rogers", "Leslie Knope", "Bart Simpson"],
  ["Alfred", "George", "Belvedere", "Jimmy"],
  ["9", "7", "10", "22"],
  ["Alaska", "North Dakota", "California", "Washington"],
  ["Paris", "New York", "Dallas", "Anehiem"],
  ["Mercury", "Iron", "Lead", "Radium"],
  [
    "France and Spain",
    "Colorado and Wyoming",
    "Panama and Nicaragua",
    "Finland and Sweden"
  ],
  ["Pandora", "Eve", "Helen", "Gwenn"],
  [
    "Tom, Dick and Harry",
    "Larry, Mo and Curly",
    "The Three Amigos",
    "Snap, Crackle and Pop"
  ],
  ["Maryland", "Conneticut", "Virginia", "New Jersey"],
  ["Peanut", "Acorn", "Pecan", "Walnut"],
  ["Ethiopia", "Lybia", "Egypt", "Saudi Arabia"],
  ["30", "26", "22", "35"],
  ["Prostate", "Skin Cancer", "Lung", "Brain"],
  ["Woodrow Wilson", "Teddy Roosevelt", "John Kennedy", "John McCarthy"],
  ["Alien", "Star Trek", "The Black Hole", "Flash Gordon"]
];
var images = [
  "../triviagame/assets/images/Q1image.jpg",
  "../triviagame/assets/images/Q2image.jpg",
  "../triviagame/assets/images/Q3image.jpg",
  "../triviagame/assets/images/Q4image.jpg",
  "../triviagame/assets/images/Q5image.jpg",
  "../triviagame/assets/images/Q6image.png",
  "../triviagame/assets/images/Q7image.jpg",
  "../triviagame/assets/images/Q8image.jpg",
  "../triviagame/assets/images/Q9image.jpg",
  "../triviagame/assets/images/Q10image.jpg",
  "../triviagame/assets/images/Q11image.jpg",
  "../triviagame/assets/images/Q12image.jpg",
  "../triviagame/assets/images/Q13image.jpg",
  "../triviagame/assets/images/Q14image.jpg",
  "../triviagame/assets/images/Q15image.jpg",
  "../triviagame/assets/images/Q16image.jpg",
  "../triviagame/assets/images/Q17image.jpg",
  "../triviagame/assets/images/Q18image.jpg",
  "../triviagame/assets/images/Q19image.jpg",
  "../triviagame/assets/images/Q20image.jpg"
];

var waiting = [
  "../triviagame/assets/images/waiting1.gif",
  "../triviagame/assets/images/waiting2.gif",
  "../triviagame/assets/images/waiting3.gif",
  "../triviagame/assets/images/waiting4.gif",
  "../triviagame/assets/images/waiting6.gif"
];
//Variables for the program
var rndQuest = []; //array for random questions
var rndAns = []; //Array for randomized answers
var counter = 0;
var corrCount = 0;
var Ans1;
Ans2;
Ans3;
Ans4;
var timeCount = 120;
var interval;

function rndmSelect() {
  //selects 10 random questions and verifies no duplicates
  for (i = 0; i < 10; i++) {
    var newVal = Math.floor(Math.random() * 19 + 1);
    if (rndQuest.includes(newVal)) {
      i = i - 1;
    } else {
      rndQuest[i] = newVal;
    }
  }
} // end of rndmSelect function
function ansOrder() {
  rndAns = []; //resets randomizer array to blank after each answer
  for (x = 0; x < 4; x++) {
    //randomizes answer order
    var newVal2 = Math.floor(Math.random() * 4);
    if (rndAns.includes(newVal2)) {
      x = x - 1;
    } else {
      rndAns[x] = newVal2;
    }
  }
}
function postQuest() {
  if (counter > rndQuest.length - 1) {
    clearInterval(interval);
    endGame();
  } else {
    var question = questions[rndQuest[counter]];
    Ans1 = answers[rndQuest[counter]][rndAns[0]];
    Ans2 = answers[rndQuest[counter]][rndAns[1]];
    Ans3 = answers[rndQuest[counter]][rndAns[2]];
    Ans4 = answers[rndQuest[counter]][rndAns[3]];
    $("#displayQ").text(question);
    $("#Ans1").text(Ans1);
    $("#Ans2").text(Ans2);
    $("#Ans3").text(Ans3);
    $("#Ans4").text(Ans4);
    postGif();
    postImage();
  }
}

function checkAnswer(boxchk) {
  var correctAns = answers[rndQuest[counter]][0];
  if (correctAns === boxchk) {
    $("#displayQ").text("That is correct!");
    setTimeout(function() {
      $("#displayQ").text(" ");
      counter = counter + 1;
      corrCount = corrCount + 1;
      ansOrder();
      postQuest();
    }, 3000);
  } else {
    $("#displayQ").html(
      "Sorry that is incorrect! The correct answer is " + correctAns
    );
    setTimeout(function() {
      $("#displayQ").text(" ");
      counter = counter + 1;
      ansOrder();
      postQuest();
    }, 4000);
  }
}

function postGif() {
  var num = Math.floor(Math.random() * 5);
  var gif = document.createElement("IMG");
  gif.src = waiting[num];
  gif.width = 380;
  gif.height = 317;
  $("#waitgif").html(gif);
}
function postImage() {
  var img = document.createElement("IMG");
  img.src = images[rndQuest[counter]];
  img.width = 360;
  img.height = 317;
  $("#infobox").html(img);
}
function timer() {
  $("#spacer").html("You have " + timeCount + "seconds left.");
  interval = setInterval(function() {
    if (timeCount != 0) {
      timeCount = timeCount - 1;
      $("#spacer").html("You have " + timeCount + "seconds left.");
    } else {
      endGame();
    }
  }, 1000);
}

function restart() {
  $("#yes").text(" ");
  $("#no").text(" ");
  document.getElementById(`b5`).hidden = true;
  document.getElementById(`b6`).hidden = true;
  document.getElementById(`b1`).hidden = false;
  document.getElementById(`b2`).hidden = false;
  document.getElementById(`b3`).hidden = false;
  document.getElementById(`b4`).hidden = false;
  counter = 0;
  corrCount = 0;
  rndmSelect();
  ansOrder();
  postQuest();
  timer();
}

function endGame() {
  $("#displayQ").text(
    "Game Over. You got " +
      corrCount +
      " out of 10 questions correct. Thanks for playing."
  );
  $("#Ans1").text("");
  $("#Ans2").text("");
  $("#Ans3").text("");
  $("#Ans4").text("");
  document.getElementById(`b1`).hidden = true;
  document.getElementById(`b2`).hidden = true;
  document.getElementById(`b3`).hidden = true;
  document.getElementById(`b4`).hidden = true;
  document.getElementById(`b5`).hidden = false;
  $("#yes").text("Play Again");
  document.getElementById(`b6`).hidden = false;
  $("#no").text("End Game");
}

$("#titlerow").html("Random Useless Trivia The Home Game");
document.getElementById(`b5`).hidden = true;
document.getElementById(`b6`).hidden = true;
rndmSelect();
ansOrder();
postQuest();
timer();

$("#b1").on("click", function() {
  checkAnswer(Ans1);
});
$("#b2").on("click", function() {
  checkAnswer(Ans2);
});
$("#b3").on("click", function() {
  checkAnswer(Ans3);
});
$("#b4").on("click", function() {
  checkAnswer(Ans4);
});
$("#b5").on("click", function() {
  restart();
});
$("#b6").on("click", function() {
  $("#displayQ").text("Thanks for playing.");
  $("#yes").text(" ");
  $("#no").text(" ");
  document.getElementById(`b5`).hidden = true;
  document.getElementById(`b6`).hidden = true;
});
