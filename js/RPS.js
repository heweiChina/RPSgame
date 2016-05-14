/*User choice
---------------------------------------------- */
var GLOBAL_USER_CHOICE;
var userPosition = document.getElementById('userSelFeedback').firstChild;

var userChoice = function (a) {
	GLOBAL_USER_CHOICE = a;
	if (GLOBAL_USER_CHOICE === 'rock') {
		userPosition.setAttribute('class', 'rock');
	}else if (GLOBAL_USER_CHOICE === 'paper') {
		userPosition.setAttribute('class', 'paper');
	}else if (GLOBAL_USER_CHOICE === 'scissors') {
		userPosition.setAttribute('class', 'scissors');
	}
}

var ROCK = document.getElementById('rock');
ROCK.addEventListener('click', function() {
	userChoice(ROCK.id);
}, false);

var PAPER = document.getElementById('paper');
PAPER.addEventListener('click', function() {
	userChoice(PAPER.id);
}, false);

var SCISSORS = document.getElementById('scissors');
SCISSORS.addEventListener('click', function() {
	userChoice(SCISSORS.id);
}, false);


/* Computer choice
---------------------------------------------- */
var GLOBAL_COM_CHOICE;
var ranNumber;
var comPosition = document.getElementById('comSelFeedback').firstChild;

var addPic = function(className) {
	if (className === 'rock') {
		comPosition.setAttribute('class', 'rock');
	}else if (className === 'paper') {
		comPosition.setAttribute('class', 'paper');
	}else if (className === 'scissors') {
		comPosition.setAttribute('class', 'scissors');
	}
}

var computerChoiceFeed = function () {
	ranNumber = Math.random();
	if (ranNumber < 0.34) {
		GLOBAL_COM_CHOICE = 'rock';
		addPic(GLOBAL_COM_CHOICE);
	}else if (ranNumber < 0.69) {
		GLOBAL_COM_CHOICE = 'paper';
		addPic(GLOBAL_COM_CHOICE);
	}else if (ranNumber < 1) {
		GLOBAL_COM_CHOICE = 'scissors';
		addPic(GLOBAL_COM_CHOICE);
	}
}

/*compare GLOBAL_USER_CHOICE with GLOBAL_COM_CHOICE
----------------------------------------------------------*/
var resultPosition = document.getElementById('result');

var resultShowUp = function (stringItem) {
	var newEl = document.createElement('p');
	if (stringItem === 'you') {
		var newText = document.createTextNode('Congratulation!' + stringItem + ' win!');
	}else if (stringItem === 'computer') {
		var newText = document.createTextNode('Sorry,' + stringItem + ' win!And you lose');
	}else if (stringItem === 'tie') {
		var newText = document.createTextNode('Tie!Try adgin');
	}
	newEl.appendChild(newText);
	resultPosition.appendChild(newEl);
}

var compare = function () {
	var tie = 'tie';
	var computer = 'computer';
	var you = 'you';
	if (GLOBAL_COM_CHOICE === GLOBAL_USER_CHOICE) {
		resultShowUp(tie);
	}else if (GLOBAL_USER_CHOICE === 'rock') {
		if (GLOBAL_COM_CHOICE === 'paper') {
			resultShowUp(computer);
		} else if (GLOBAL_COM_CHOICE === 'scissors') {
			resultShowUp(you);
		}
	}else if (GLOBAL_USER_CHOICE === 'paper') {
		if (GLOBAL_COM_CHOICE === 'rock') {
			resultShowUp(you);
		} else if (GLOBAL_COM_CHOICE === 'scissors') {
			resultShowUp(computer);
		}
	}else if (GLOBAL_USER_CHOICE === 'scissors') {
		if (GLOBAL_COM_CHOICE === 'rock') {
			resultShowUp(computer);
		} else if (GLOBAL_COM_CHOICE === 'paper') {
			resultShowUp(you);
		}
	}
}

/*game start!
----------------------------------- */
var signal0 = document.getElementsByTagName('input')[0];
signal0.addEventListener('click', function(){
	computerChoiceFeed();
	compare();
}, false);
var signal1 = document.getElementsByTagName('input')[1];
signal1.addEventListener('click', function(){
	computerChoiceFeed();
	compare();
}, false);
var signal2 = document.getElementsByTagName('input')[2];
signal2.addEventListener('click', function(){
	computerChoiceFeed();
	compare();
}, false);