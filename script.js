var correct = 0;

var answer1 = prompt("True or false. My favorite color is black.");
  if (answer1.toLowerCase() === "true") {
    correct += 1;
  }

var answer2 = prompt("True or false. When I was in college, I was a cake decorator.");
  if (answer2.toLowerCase() === "true") {
    correct += 1;
  }

var answer3 = prompt("True or false. I want to leave Seattle someday.");
  if (answer3.toLowerCase() === "false") {
    correct += 1;
  }

var answer4 = prompt("I was a classical flutist for a long time. Can you guess how many years I actively played?");
  if (parseInt(answer4) === 15) {
    correct += 1;
  }

var answer5 = prompt("How many dogs do I have?");
  if (parseInt(answer5) === 2) {
    correct += 1;
  }

var answer6 = prompt("I do CrossFit and I just hit a PR on my one rep max deadlift. Can you guess how much weight I lifted in pounds?");
  if (parseInt(answer6) === 225) {
    correct += 1;
  }

document.write("<p>You got " + correct + " out of 6 questions correct.</p>");

if (correct === 6) {
  document.write("<p> You know me very well! Too well! Are you <em>me</em>???</p>");
} else if (correct >=4) {
  document.write("<p> Not bad!</p>");
} else {
  document.write("<p> Hmm, not sure if you know me very well.</p>");
}
