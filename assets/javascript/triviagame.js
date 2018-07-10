var block = $("#game-space");

$(document).on("click", "#start", function(){
  game.start();
});

$(document).on("click", "#done", function(){
  game.done();
});

var questions = [{
	question: "What is the supreme law of the land?",
	choices: ["The bible", "The bill of rights", "The President", "The Constitution"],
	rightResponse: "the constitution"

}, {	

	question: "We elect a U.S. Senator for how many years? ",
	choices: ["6", "9", "12", "14"],
	rightResponse: "6"

}, {

	question: "Who is in charge of the executive branch?",
	choices: ["Corporations", "The Senate", "The House", "The President"],
	rightResponse: "The President"

}, {

	question: "What is freedom of religion?",
	choices: ["You can practice any religion, or not practice a religion", "You can only practice religion in your household, but not in public", "You have the right to practice religion, but only amongst the same religion", "None of the above"],
	rightResponse: "You can practice any religion, or not practice a religion"

}, {

	question: "What is the economic system in the United States?",
	choices: ["Socialist", "Capitalist", "Federalist", "Republic"],
	rightResponse: "Capitalist"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		confirm("Thank you. Your time is over.");
  		game.done();

  	}
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#time').prepend('<h5>Time Remaining: <span id="counter-number">60</span> Seconds</h5>');
    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
    block.append('<h2>' + questions[i].question + '</h2>');
    for (var a = 0; a < questions[i].choices.length; a++){
      block.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[a] + '">' + '&nbsp'+ questions[i].choices[a] + '<br>');
      }
        }
        block.append("<br><button id='done' class='btn btn-primary btn-lg'>Submit</button>");
    
    },

    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].rightResponse) {
                console.log(this);
                  game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this);
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].rightResponse) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].rightResponse) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].rightResponse) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].rightResponse) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        this.results();
    },


      results:function() {
          clearInterval(timer);

  	  	$("#start-container h2").remove();
  	   block.html("<h2>You've completed the test. Below you will see your results.</h2>");
  	   block.append("<h3>Correct " + this.correct + "</h3>");
  	   block.append("<h3>Incorrect " + this.incorrect + "</h3>");
  	   block.append("<h3>Unaswered " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
