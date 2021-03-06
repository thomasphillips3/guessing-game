// var userName = prompt("Hi there! What's your name?");
//   alert("Hey " + userName + ". Nice to meet you. Let's get started.");
//   console.log("variable userName: " + userName);

var response1;
var response2;
var response3;
var response4;
var response5;
var response6;

var questions = [
  [ "Was I a cake decorator while I was in college?", "yes", response1 ],
  [ "What is my favorite color?", "black", response2 ],
  [ "Do I plan to move out of Seattle someday?", "no", response3 ],
  [ "How many years did I play the flute?", "15", response4 ],
  [ "I do CrossFit and I just hit a PR on my one rep max deadlift. Can you guess how much weight I lifted in pounds?", "225", response5 ],
  [ "I love taking photos. What is my favorite subject?", "dogs", response6]
]

// Loop to fill in questions in the page
for (i=0; i < questions.length; i++){
  document.getElementById("q"+(i+1)).innerHTML = questions[i][0];
}

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var incorrect = [];

function print(message, id) {
  var outputDiv = document.getElementById(id);
  outputDiv.innerHTML = message;
}


function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question).toLowerCase();
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
    console.log("response: correct");
  } else {
    incorrect.push(question);
    console.log("response: incorrect");
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h3>You got these questions correct:</h3>";
html += buildList(correct);
html += "<h3>You got these questions incorrect:</h3>";
html += buildList(incorrect);
print(html, "output");
