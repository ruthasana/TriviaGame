

$(document).ready(function()){
// Questions variable will holds questions
var questions = {
question1:"Name the world's biggest island?",
answer:"Greenland",
suggestions: ["Greenland","Sao Tome", "Madagasgar","Bahamas"]
},

{
question1:"What is the world's longest river?",
answer:"Amazon";
suggestions: ["Nile","Amazon", "Sepik","Mississippi"]
},

{
question1:"Name the world's largest ocean",
answer:"Pacific",
suggestions: ["Pacific","Atlantic", "Artic","Indian"]	
},

{
question1:"Where would you find the world's most ancient forest?",
answer:"Daintree Forest north of Cairns, Australia",
suggestions: ["Congolese Forest","Mangrove Forest", "Dzanga-Sangha Forests","Daintree Forest north of Cairns, Australia"]	
}
    

  
for (var i = 0; i < questions.length; i++){
	$(this).append(questions[i]);
	console.log(this);
}