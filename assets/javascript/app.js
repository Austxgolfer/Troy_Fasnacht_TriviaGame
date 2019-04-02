var q1 = {quest:"The beaver is the national emblem of which country",fake4:"Canada",fake1:"Alaska",fake2:"Norway",fake3:"Russia",bimage:,};
var q2 = {quest:"In which movie did Humphrey Bogart play Charlie Allnut?",fake4:"African Queen",fake1:"Casablanca",fake2:"The Caine Mutiny",fake3:"The Maltese Falcon",bimage:,};
var q3 = {quest:"Which singer's real name is Stefani Joanne Angelina Germanotta?",fake4:"Lady Gaga",fake1:"Gwenn Stefani",fake2:"Cher",fake3:"Cardi B",bimage:,};
var q4 = {quest:"How many players are there in a baseball team?",fake4:"9",fake1:"11",fake2:"25",fake3:"8",bimage:,};
var q5 = {quest:"Which TV Character Said,'Live long and prosper'?",fake4:"Mr. Spock",fake1:"Mr. Rogers",fake2:"Leslie Knope",fake3:"Bart Simpson",bimage:,};
var q6 = {quest:"What is the name of Batman's butler?",fake4:"Alfred",fake1:"George",fake2:"Belvedere",fake3:"Jimmy",bimage:,};
var q7 = {quest:"The average human body contains how many pints of blood?",fake4:"9",fake1:"7",fake2:"10",fake3:"22",bimage:,};
var q8 = {quest:"Which US state is nearest to the old Soviet Union?",fake4:"Alaska",fake1:"North Dakota",fake2:"California",fake3:"Washington",bimage:,};
var q9 = {quest:"In which city is Jim Morrison buried?",fake4:"Paris",fake1:"New York",fake2:"Dallas",fake3:"Anehiem",bimage:,};
var q10 = {quest:"`Hg' is the chemical symbol of which element?",fake4:"Mercury",fake1:"Iron",fake2:"Lead",fake3:"Radium",bimage:,};
var q11 = {quest:"The Pyrenees mountain range separates which two European countries?",fake4:"France and Spain",fake1:"Canada and America",fake2:"Panama and Nicaragua",fake3:"Finland and Sweden",bimage:,};
var q12 = {quest:"According to Greek mythology who was the first woman on earth?",fake4:"Pandora",fake1:"Eve",fake2:"Helen",fake3:"Gwenn",bimage:,};
var q13 = {quest:"What names were given to the three tunnels in the movie `The Great Escape`?",fake4:"Tom, Dick and Harry",fake1:"Larry, Mo and Curly",fake2:"The Three Amigos",fake3:"Snap, Crackle and Pop",bimage:,};
var q14 = {quest:"Which US state's largest city is Baltimore?",fake4:"Maryland",fake1:"Conneticut",fake2:"Virginia",fake3:"New Jersey",bimage:,};
var q15 = {quest:"How is the groundnut better known?",fake4:"Peanut",fake1:"Acorn",fake2:"Pecan",fake3:"Walnut",bimage:,};
var q16 = {quest:"Which country was formerly known as Abyssinia?",fake4:"Ethiopia",fake1:"Lybia",fake2:"Egypt",fake3:"Saudi Arabia",bimage:,};
var q17 = {quest:"How many letters are there in the German alphabet?",fake4:"30",fake1:"26",fake2:"22",fake3:"35",bimage:,};
var q18= {quest:"What is the most commonly diagnosed cancer in men?",fake4:"Prostate",fake1:"Skin Cancer",fake2:"Lung",fake3:"Brain",bimage:,};
var q19 = {quest:"Who was the US president during World War I?",fake4:"Woodrow Wilson",fake1:"Teddy Roosevelt",fake2:"John Kennedy",fake3:"John McCarthy",bimage:,};
var q20= {quest:"In which 1979 movie was the spaceship called Nostromo?",fake4:"Alien",fake1:"Star Trek",fake2:"The Black Hole",fake3:"Flash Gordon",bimage:,};
//Variables for the program
var rndQuest = []; //array for random questions
var rndAns = []; //Array for randomized answers

function rndmSelect() { //selects 10 random questions and verifies no duplicates
    for (i = 0; i < 10; i++) {
        var newVal = Math.floor((Math.random()*20)+1);
        if (rndQuest.includes(newVal)){
        i = i - 1;
        } else {rndQuest[i] = newVal;}
    };

    for (x = 0; x < 3; i++) {  //randomizes answer order
        var newVal2 = Math.floor((Math.random()*3)+1);
        if (rndAns.includes(newVal2)){
        i = i - 1;
        } else {rndAns[i] = newVal2;}    
    };
}; // end of rndmSelect function

function postQuest() {
    for (i = 0; i < 10; i++){
        var question = rndQuest[i]
        var Ans1 = fake + rndAns[0];
        var Ans2 = fake + rndAns[1];
        var Ans3 = fake + rndAns[2];
        var Ans4 = fake + rndAns[3];
        document.getElementById(`displayQ`).innerHTML = question.quest;
        document.getElementById(`Ans1`).innerHTML = question.Ans1;
        document.getElementById(`Ans2`).innerHTML = question.Ans2;
        document.getElementById(`Ans3`).innerHTML = question.Ans3;
        document.getElementById(`Ans4`).innerHTML = question.Ans4;
       
       // document.getElementById(`number`).innerHTML = "Make another selection";
    }// else { if (runningTot > targetNum) {
      //  document.getElementById(`number`).innerHTML = "You lose!  You exceeded the target number.";
      //  setTimeout(function(){gameReset();},5000);
    }// else {document.getElementById(`number`).innerHTML = "You Win!  Game will Restart Automatically";
       // setTimeout(function(){gameReset();},5000);
};   
};
};



//button clicks for the answers

$(`#jewel0`).on(`click`,function() {totalUpdate(jewelVal[0])});
$(`#jewel1`).on(`click`,function() {totalUpdate(jewelVal[1])});
$(`#jewel2`).on(`click`,function() {totalUpdate(jewelVal[2])});
$(`#jewel3`).on(`click`,function() {totalUpdate(jewelVal[3])});

 //setTimeout(function(){document.getElementById(`displayVal`).innerHTML = " "},1000);
        //setTimeout(function(){document.getElementById(`totalVal`).innerHTML = " "},1000);