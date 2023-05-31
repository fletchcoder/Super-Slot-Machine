// Globals

const ROWS = 3;
const COLS = 5;

const CHER_NUM = 0;
const ORANGE_NUM = 1;
const MEL_NUM = 2;
const BAR_NUM = 3;
const BELL_NUM = 4;

const image_sources = ["images/cherry.png", "images/orange.png", "images/melon.png", "images/bar.png", "images/bell.png"];

let balance = document.getElementById("balance");
let bet = document.getElementById("bet");

const spin = () => {
    moveKnob();
    let slots = document.getElementsByClassName("slotimage");
    for (let i = 0; i < slots.length; i++) {
        let num_chooser = Math.floor(Math.random() * 5);
        if (num_chooser == CHER_NUM) {
            slots[i].src = image_sources[CHER_NUM];
        }
        else if (num_chooser == ORANGE_NUM) {
            slots[i].src = image_sources[ORANGE_NUM];
        }
        else if (num_chooser == MEL_NUM) {
            slots[i].src = image_sources[MEL_NUM];
        }
        else if (num_chooser == BAR_NUM) {
            slots[i].src = image_sources[BAR_NUM];
        }
        else if (num_chooser == BELL_NUM) {
            slots[i].src = image_sources[BELL_NUM];
        }
    }
    updateBalance(slots);
}

const validate = () => {
    if (balance.value == '' || isNaN(balance.value) || bet.value == '' || isNaN(bet.value)) {
        alert("You must enter a dollar amount for both the bet and the balance.")
    }
    else if (bet.value * ROWS > balance.value) {
        alert("The bet per line should not exceed the balance.")
    }

    else {
        displayBalance();
        switchKnob();
    }
}

const moveKnob = () => {
    document.getElementById("inner").style.justifyContent = "flex-end";

    document.getElementById("knob").style.display = "none";

    document.getElementById("knob2").style.display = "inline";
}

const moveKnobBack = () => {
    document.getElementById("inner").style.justifyContent = "flex-start";

    document.getElementById("knob").style.display = "inline";

    document.getElementById("knob2").style.display = "none";

    document.getElementById("message").style.display = "none";

    document.getElementById("green").style.display = "none";

    document.getElementById("red").style.display = "none";
}

const switchKnob = () => {
    document.getElementById("knob").style.display = "inline";

    document.getElementById("knob2").style.display = "none";
}

const displayBalance = () => {
    document.getElementById("moneyinfo").innerHTML = 
    '<h2>Balance</h2>' + '<h3>' + '$' + parseFloat(balance.value) + '</h3>' +
    '<h2>Bet</h2>' + '<h3>' + '$' + parseFloat(bet.value) + '</h3>';
}

const updateBalance = (array) => {
    let newBalance = parseFloat(balance.value);
    let newBet = parseFloat(bet.value);

    let multi = calculateBalance(array);
    let multi_two = calculateBalanceTwo(array);
    let multi_three = calculateBalanceThree(array);

    if (array[0].src == array[1].src && array[0].src == array[2].src && array[0].src == array[3].src && array[0].src == array[4].src) {
        if (array[0].src == array[5].src && array[0].src == array[6].src && array[0].src == array[7].src && array[0].src == array[8].src && array[0].src == array[9].src) {
            if (array[0].src == array[10].src && array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
                setJackpot(array);
                newBalance += newBet * multi * 3;
                balance.value = newBalance;
                return displayBalance();
            }
            else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
                setJackpot(array);
                newBalance += newBet * multi * 2 + (newBet * multi_three);
                balance.value = newBalance;
                return displayBalance();
            }
            setJackpot(array);
            newBalance += newBet * multi * 2;
            balance.value = newBalance;
            return displayBalance();
        }
        else if (array[5].src == array[6].src && array[5].src == array[7].src && array[5].src == array[8].src && array[5].src == array[9].src) {
            if (array[0].src == array[10].src && array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
                setJackpot(array);
                newBalance += newBet * multi * 2 + (newBet * multi_two);
                balance.value = newBalance;
                return displayBalance();
            }
            else if (array[5].src == array[10].src && array[5].src == array[11].src && array[5].src == array[12].src && array[5].src == array[13].src && array[5].src == array[14].src) {
                setJackpot(array);
                newBalance += newBet * multi + (newBet * multi_two * 2);
                balance.value = newBalance;
                return displayBalance();
            }
            else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
                setJackpot(array);
                newBalance += newBet * multi + (newBet * multi_two) + (newBet * multi_three);
                balance.value = newBalance;
                return displayBalance();
            }
            setJackpot(array);
            newBalance += newBet * multi + (newBet * multi_two);
            balance.value = newBalance;
            return displayBalance();
        }
        else if (array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
            setJackpot(array);
            newBalance += newBet * multi * 2;
            balance.value = newBalance;
            return displayBalance();
        }
        else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
            setJackpot(array);
            newBalance += newBet * multi + (newBet * multi_three);
            balance.value = newBalance;
            return displayBalance();
        }
        setJackpot(array);
        newBalance += newBet * multi;
        balance.value = newBalance;
        return displayBalance();
    }

    else if (array[5].src == array[6].src && array[5].src == array[7].src && array[5].src == array[8].src && array[5].src == array[9].src) {
        if (array[5].src == array[10].src && array[5].src == array[11].src && array[5].src == array[12].src && array[5].src == array[13].src && array[5].src == array[14].src) {
            setJackpot(array);
            newBalance += newBet * multi_two * 2;
            balance.value = newBalance;
            return displayBalance();
        }
        else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
            setJackpot(array);
            newBalance += newBet * multi_two + (newBet * multi_three);
            balance.value = newBalance;
            return displayBalance();
        }
        setJackpot(array);
        newBalance += newBet * multi_two;
        balance.value = newBalance;
        return displayBalance();
    }

    else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
        setJackpot(array);
        newBalance += newBet * multi_three;
        balance.value = newBalance;
        return displayBalance()
    }

    else {
        setJackpot(array);
        newBalance -= newBet * 3;
        if (newBalance == 0 || newBalance < 0) {
            newBalance = 0;
            document.getElementById("message").innerHTML = "OUT OF MONEY!";
            document.getElementById("red").style.display = "none";
            document.getElementById("green").style.display = "none";
            document.getElementById("end").style.display = "inline";
            balance.value = newBalance;
            return displayBalance();
        }
        balance.value = newBalance;
        return displayBalance();
    }
}

const calculateBalance = (array) => {
    let multiplier = 1;
    
    let source = array[0].src;

    if (source.includes("bar.png")) {
        multiplier = 100;
    }

    else if (source.includes("bell.png")) {
        multiplier = 10;
    }

    return multiplier;
}

const calculateBalanceTwo = (array) => {
    let multiplier = 1;
    
    let source = array[5].src;

    if (source.includes("bar.png")) {
        multiplier = 100;
    }

    else if (source.includes("bell.png")) {
        multiplier = 10;
    }

    return multiplier;
}

const calculateBalanceThree = (array) => {
    let multiplier = 1;
    
    let source = array[10].src;

    if (source.includes("bar.png")) {
        multiplier = 100;
    }

    else if (source.includes("bell.png")) {
        multiplier = 10;
    }

    return multiplier;
}

const setJackpot = (array) => {
    let first = array[0].src;
    let second = array[5].src;
    let third = array[10].src;

    let message = document.getElementById("message");
    let green = document.getElementById("green");
    let red = document.getElementById("red");

    if (array[0].src == array[1].src && array[0].src == array[2].src && array[0].src == array[3].src && array[0].src == array[4].src) {
        if (array[0].src == array[5].src && array[0].src == array[6].src && array[0].src == array[7].src && array[0].src == array[8].src && array[0].src == array[9].src) {
            if (array[0].src == array[10].src && array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
                if (first.includes("bar.png")) {
                    message.innerHTML = "SUPER MEGA JACKPOT!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (first.includes("bell.png")) {
                    message.innerHTML = "MASSIVE JACKPOT!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else {
                    message.innerHTML = "All matching! Nice!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
            }
            else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
                if (first.includes("bar.png")) {
                    message.innerHTML = "Big double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (first.includes("bell.png")) {
                    message.innerHTML = "Double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (third.includes("bar.png")) {
                    message.innerHTML = "Big jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (third.includes("bell.png")) {
                    message.innerHTML = "Jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else {
                    message.innerHTML = "Double matches + extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                
            }
            if (first.includes("bar.png")) {
                message.innerHTML = "MEGA DOUBLE JACKPOT!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return;
            }
            else if (first.includes("bell.png")) {
                message.innerHTML = "DOUBLE JACKPOT!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return;
            }
            else {
                message.innerHTML = "Double matches!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return;
            }
        }
        else if (array[5].src == array[6].src && array[5].src == array[7].src && array[5].src == array[8].src && array[5].src == array[9].src) {
            if (array[0].src == array[10].src && array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
                if (first.includes("bar.png")) {
                    message.innerHTML = "Big double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (first.includes("bell.png")) {
                    message.innerHTML = "Double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (second.includes("bar.png")) {
                    message.innerHTML = "Big jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (second.includes("bell.png")) {
                    message.innerHTML = "Jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else {
                    message.innerHTML = "Double matches + extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;  
                }
            }
            else if (array[5].src == array[10].src && array[5].src == array[11].src && array[5].src == array[12].src && array[5].src == array[13].src && array[5].src == array[14].src) {
                if (second.includes("bar.png")) {
                    message.innerHTML = "Big double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (second.includes("bell.png")) {
                    message.innerHTML = "Double jackpot plus extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (first.includes("bar.png")) {
                    message.innerHTML = "Big jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else if (first.includes("bell.png")) {
                    message.innerHTML = "Jackpot plus double match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline";
                    return;
                }
                else {
                    message.innerHTML = "Double matches + extra match!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline"; 
                    return;
                }
            }
            else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
                if (first.includes("bar.png") || second.includes("bar.png") || third.includes("bar.png")) {
                    message.innerHTML = "Big single jackpot plus two different matches!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline"; 
                    return;
                }
                else if (first.includes("bell.png") || second.includes("bell.png") || third.includes("bell.png")) {
                    message.innerHTML = "Single jackpot plus two different matches!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline"; 
                    return;
                }
                else {
                    message.innerHTML = "All different sets of matches!" + "<br>" + "Play again?";
                    message.style.display = "inline";
                    green.style.display = "inline";
                    red.style.display = "inline"; 
                    return;
                }
            }
            if (first.includes("bar.png") || second.includes("bar.png")) {
                message.innerHTML = "Big single jackpot plus extra match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else if (first.includes("bell.png") || second.includes("bell.png")) {
                message.innerHTML = "Single jackpot plus extra match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return; 
            }
            else {
                message.innerHTML = "Two sets of matches!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return; 
            }
        }
        else if (array[0].src == array[11].src && array[0].src == array[12].src && array[0].src == array[13].src && array[0].src == array[14].src) {
            if (first.includes("bar.png")) {
                message.innerHTML = "Big double jackpot!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else if (first.includes("bell.png")) {
                message.innerHTML = "Double jackpot!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else {
                message.innerHTML = "Double matches!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
        }
        else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
            if (first.includes("bar.png") || third.includes("bar.png")) {
                message.innerHTML = "Big jackpot plus extra bonus!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else if (first.includes("bell.png") || third.includes("bell.png")) {
                message.innerHTML = "Jackpot plus extra bonus!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else {
                message.innerHTML = "Two different sets of matches!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
        }
        if (first.includes("bar.png")) {
            message.innerHTML = "Big jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline"; 
            return;
        }
        else if (first.includes("bell.png")) {
            message.innerHTML = "Jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline"; 
            return;
        }
        else {
            message.innerHTML = "First row match!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline"; 
            return;
        }
    }

    else if (array[5].src == array[6].src && array[5].src == array[7].src && array[5].src == array[8].src && array[5].src == array[9].src) {
        if (array[5].src == array[10].src && array[5].src == array[11].src && array[5].src == array[12].src && array[5].src == array[13].src && array[5].src == array[14].src) {
            if (second.includes("bar.png")) {
                message.innerHTML = "Big double jackpot!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else if (second.includes("bell.png")) {
                message.innerHTML = "Double jackpot!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return;
            }
            else {
                message.innerHTML = "Second and third row match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline";
                return;
            }
        }
        else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
            if (second.includes("bar.png") || third.includes("bar.png")) {
                message.innerHTML = "Big jackpot plus extra match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else if (second.includes("bell.png") || third.includes("bell.png")) {
                message.innerHTML = "Jackpot plus extra match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
            else {
                message.innerHTML = "Two different sets of match!" + "<br>" + "Play again?";
                message.style.display = "inline";
                green.style.display = "inline";
                red.style.display = "inline"; 
                return;
            }
        }
        if (second.includes("bar.png")) {
            message.innerHTML = "Big second row jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline"; 
            return;
        }
        else if (second.includes("bell.png")) {
            message.innerHTML = "Second row jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline";   
            return;
        }
        else {
            message.innerHTML = "Second row match!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline";
            return;
        }
    }

    else if (array[10].src == array[11].src && array[10].src == array[12].src && array[10].src == array[13].src && array[10].src == array[14].src) {
        if (third.includes("bar.png")) {
            message.innerHTML = "Big third row jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline";
            return;
        }
        else if (third.includes("bell.png")) {
            message.innerHTML = "Third row jackpot!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline";
            return;
        }
        else {
            message.innerHTML = "Third row match!" + "<br>" + "Play again?";
            message.style.display = "inline";
            green.style.display = "inline";
            red.style.display = "inline";
            return;
        }
    }

    else {
        message.innerHTML = "You lose!" + "<br>" + "Play again?";
        message.style.display = "inline";
        green.style.display = "inline";
        red.style.display = "inline";
        return;
    }
}
