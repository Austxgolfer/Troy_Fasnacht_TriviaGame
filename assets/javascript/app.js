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
var answers = [["Canada","Alaska","Norway","Russia"],
    ["African Queen","Casablanca","The Caine Mutiny","The Maltese Falcon"],
    ["Lady Gaga","Gwenn Stefani","Cher","Cardi B"],
    ["9","11","25","8"],
    ["Mr. Spock","Mr. Rogers","Leslie Knope","Bart Simpson"],
    ["Alfred","George","Belvedere","Jimmy"],
    ["9","7","10","22"],
    ["Alaska","North Dakota","California","Washington"],
    ["Paris","New York","Dallas","Anehiem"],
    ["Mercury","Iron","Lead","Radium"],
    ["France and Spain","Colorado and Wyoming","Panama and Nicaragua","Finland and Sweden"],
    ["Pandora","Eve","Helen","Gwenn"],
    ["Tom, Dick and Harry","Larry, Mo and Curly","The Three Amigos","Snap, Crackle and Pop"],
    ["Maryland","Conneticut","Virginia","New Jersey"],
    ["Peanut","Acorn","Pecan","Walnut"],
    ["Ethiopia","Lybia","Egypt","Saudi Arabia"],
    ["30","26","22","35"],
    ["Prostate","Skin Cancer","Lung","Brain"],
    ["Woodrow Wilson","Teddy Roosevelt","John Kennedy","John McCarthy"],
    ["Alien","Star Trek","The Black Hole","Flash Gordon"]
];

//Variables for the program
var rndQuest = []; //array for random questions
var rndAns = []; //Array for randomized answers
var counter = 0;
var corrCount =0;
var Ans1;Ans2;Ans3;Ans4;

function rndmSelect() { //selects 10 random questions and verifies no duplicates
    for (i = 0; i < 10; i++) {
        var newVal = Math.floor((Math.random()*19)+1);
        if (rndQuest.includes(newVal)){
        i = i - 1;
        } else {rndQuest[i] = newVal;
        console.log(rndQuest);}
        };
    };// end of rndmSelect function
function ansOrder(){
    for (x = 0; x < 4; x++) {  //randomizes answer order
        var newVal2 = Math.floor((Math.random()*4));
        if (rndAns.includes(newVal2)){
        x = x - 1;
        } else {rndAns[x] = newVal2;
        console.log(rndAns);}    
    };
}; 
function postQuest() {
    if (counter > rndQuest.length-1) {
        $("#spacer").text("Gameover. You got " + corrCount + "out of 10 questions correct."); 
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
        };
};

function checkAnswer(boxchk) {
    var correctAns = answers[rndQuest[counter]][0];
    console.log(boxchk);
    if (correctAns === boxchk) {
        $("#spacer").text("That is correct!");
        //var delay = setInterval($("#spacer").text(" "),1000);
        //clearInterval(delay);
        counter=counter + 1;
        corrCount = corrCount + 1;
        console.log(counter);
        rndAns = [];
        ansOrder();
        postQuest();
    } else { $("#spacer").text("Sorry that is incorrect!");
    //var delay = setInterval($("#spacer").text(" "),1000);
    //clearInterval(delay);
        counter=counter + 1;
        console.log(counter);
        rndAns = [];
        ansOrder();
        postQuest();
    };
};



   


rndmSelect();
ansOrder();
postQuest();
$("#Ans1").on("click",function() {checkAnswer(Ans1)});
$("#Ans2").on("click",function() {checkAnswer(Ans2)});
$("#Ans3").on("click",function() {checkAnswer(Ans3)});
$("#Ans4").on("click",function() {checkAnswer(Ans4)});
