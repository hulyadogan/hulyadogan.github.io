(function() {
  var quiz = [{
    question: "Q1: Is Ehlers–Danlos syndrome hereditary?",
    choices: [ "Yes","No"],
    correctAnswer: 1
  }, {
    question: "Q2: Which is wrong about Ehlers–Danlos syndrome?",
    choices: ["Most forms of the condition are inherited in an autosomal dominant pattern.","There is cure for EDS."],
    correctAnswer: 2
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();


var quiz = [
        {
  
            "question" : "Q2: Which is wrong about Ehlers–Danlos syndrome?",
            "choices" : [
                                    "Most forms of the condition are inherited in an autosomal dominant pattern.",
                                    "There is cure for EDS."
                                   
                                ],
            "correct" : "There is cure for EDS.",
            
        },
        {
            "question" : "Q3:What is fundemantal reason of EDS?",
            "image" : "",
            "choices" : [
                                    "EDS is caused by a defect in the structure, production, or processing of collagen or proteins that interact with collagen",
                                    "Because mallory bodies are damaged intermediate filaments within the hepatocytes.",
                                    
                                ],
            "correct" :"EDS is caused by a defect in the structure, production, or processing of collagen or proteins that interact with collagen" ,
           
        },


    ];

function

if 



var currentquestion = 0,
 score = 0,
 submt = true,
 picked;

 $(document).ready(function(){
   $("#submitbutton").hide();

 function htmlEncode(value) {
     return $(document.createElement('div')).text(value).html();
 }


 function addChoices(choices) {
     if (typeof choices !== "undefined" && $.type(choices) == "array") {
         $('#choice-block').empty();
         for (var i = 0; i < choices.length; i++) {
             $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
         }
     }
 }

 function nextQuestion() {
     submt = true;
     alert("nQ");
     $('#explanation').empty();
     $('#question').text(quiz[currentquestion]['question']);
     $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
     if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
         if ($('#question-image').length == 0) {
             $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
         } else {
             $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
         }
     } else {
         $('#question-image').remove();
     }
     addChoices(quiz[currentquestion]['choices']);
     setupButtons();


 }


 function processQuestion(choice) {
     alert(choice);
     currentquestion++;
      alert(currentquestion);
     $("#submitbutton").hide();

         if (currentquestion == quiz.length) {
             endQuiz();
         } else {

             nextQuestion();
         }

 }


 function setupButtons() {
     $('.choice').on('mouseover', function () {
         $(this).css({
             'background-color': '#e1e1e1'
         });
     });
     $('.choice').on('mouseout', function () {
         $(this).css({
             'background-color': '#fff'
         });
     })
     $('.choice').on('click', function () {
         alert("");
         choice = $(this).attr('data-index');
         $('.choice').removeAttr('style').off('mouseout mouseover');
         $(this).css({
             'border-color': '#222',
             'font-weight': 700,
             'background-color': '#c1c1c1'
         });
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
         $('.choice').eq(choice).css({
             'background-color': '#50D943'
         });
         $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
         score++;
     } else {
         $('.choice').eq(choice).css({
             'background-color': '#D92623'
         });
         $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
     }
            $("#submitbutton").show();
         if (submt) {
             alert("submit");
             submt = false;
             $('#submitbutton').css({
                 'color': '#000'

             });
             $("#submitbutton").click(function(){
               alert("click");
                  $('.choice').off('click');
                 $(this).off('click');
                 processQuestion(choice);
             });
         }
     })
 }


 function endQuiz() {
     $('#explanation').empty();
     $('#question').empty();
     $('#choice-block').empty();
     $('#submitbutton').remove();
     $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
     $(document.createElement('h2')).css({
         'text-align': 'center',
         'font-size': '4em'
     }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
 }


 function init() {
     //add title
     if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
         $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
     } else {
         $(document.createElement('h1')).text("Quiz").appendTo('#frame');
     }

     //add pager and questions
     if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
         //add pager
         $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
         //add first question
         $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
         //add image if present
         if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
             $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
         }
         $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

         //questions holder
         $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

         //add choices
         addChoices(quiz[0]['choices']);

         //add submit button
         $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
             'font-weight': 700,
             'color': '#222',
             'padding': '30px 0',
          }).appendTo('#frame');


       $("#submitbutton").hide();
         setupButtons();
     }
 }

 init();
});