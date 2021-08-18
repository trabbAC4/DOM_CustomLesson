var password = Math.round(Math.random() * 10000);//random 4 digit number generated
var attempts = 1;//attempts goes up each time
var hint = 0;
var hint1 = 0;//no clear hint
var hint2 = (password - 7) + '-' + (password + 7); //makes an interval in which the password is in 
var hint3 = String(password).charAt(2);//third hint is second digit
var hint4 = String(password).charAt(3);//fourth hint is third digit
console.log(password);

function valid_input() {
    var guess = document.getElementById('guess').value; //your guess
    console.log(guess); //For testing
    if (guess > 9999 || guess < 1000) {
        alert("You entered too little or too many numbers. Try again!");
    }
    else if (isNaN(guess)) {
        alert("Please enter a number!");
    }
    else {
        check(guess);
    }
}
function check(guess) {
    if (guess == password){ //this says if the number you guessed is correct, you win
        win();
    } else if (attempts==5){  //This is you regular attempts
        alert('You lost!') //if you pass 5 attempts, the password is frozen
        location.reload();
	}
    document.getElementById('triesLeft').innerHTML-=1; //displays the amount of tries left
    attempts+=1;//after attempts reaches five you lose
    hint+=1;//as number goes up, you get more hints
    if(hint == 1){
        document.getElementById('hint1').innerHTML = "Here's a hint. IT'S NOT THAT NUMBER!"//teases the player
    }//FIRST "HINT" NOT A HINT
    if(hint == 2){
        document.getElementById('hint2').innerHTML = "Alright I'll help you. The password is on the interval " + hint2; //says what numbers the password is between
    }
    else if(hint == 3){
        document.getElementById('hint3').innerHTML = 'Another hint? Fine. The third digit is ' + hint3;//THIRD HINT

    }
    else if(hint == 4){
        document.getElementById('hint4').innerHTML = 'LAST CHANCE. You ready? The fourth digit is ' + hint4;//FOURTH HINT
    }
}
function win() {
    userChoice = prompt('You win! Do you want to guess another passcode? (Y/N)');//Click yes or no to play the password againor later
    location.reload();
}