var numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];

var numbers = [];
var numCorrect = 0;
var secLeft = 45;
var clock =null;

var correctScore=0;
var wrongScore=0;
var finalScore=0;

exports.Numbers = function (numbersCookie, numCorrectCookie) {
    console.log(numbersCookie);
    if (numCorrectCookie === null) {
        numCorrect = 0;
    } else {
        numCorrect = numCorrectCookie;
    }
    
    if (numbersCookie === null) {
        for (var i = 0; i < numText.length; i++) {
            var number = new Number(numText[i], i, 0, false);
            
            numbers.push(number);
        }
    } else {
        numbers = numbersCookie;
    }
    this.initGame = initGame();
    console.log(numbers);
};
exports.initGame = function() {
    console.log("initializing");
    var ulText = $('#numName');
    var ulNum = $('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
        if (numbers[i].placed) {
            $("#n" + i).hide();
        }
    }
    addDragNDrop();
    startInterval();
};
