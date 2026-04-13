// Soccer Stat Encoder
// CodeHS JavaScript Console

var players = [];

function addPlayer(name, goals) {
    var player = {
        name: name,
        goals: goals,
        asciiName: []
    };

    for (var i = 0; i < name.length; i++) {
        player.asciiName.push(name.charCodeAt(i));
    }

    players.push(player);
}

function goalsCategory(goals) {
    if (goals <= 5) {
        return 'Low Scorer';
    } else if (goals <= 15) {
        return 'Mid Scorer';
    } else {
        return 'Top Scorer';
    }
}

function asciiToBinary(asciiArray) {
    var binaryArray = [];
    for (var i = 0; i < asciiArray.length; i++) {
        binaryArray.push(asciiArray[i].toString(2));
    }
    return binaryArray;
}

console.log('Welcome to the Soccer Stat Encoder');

var count = Number(readLine('How many players do you want to enter? '));

for (var i = 0; i < count; i++) {
    var name = readLine('Enter player name: ');
    var goals = Number(readLine('Enter goals scored: '));
    addPlayer(name, goals);
}

for (var j = 0; j < players.length; j++) {
    var p = players[j];
    console.log('Player:', p.name);
    console.log('Goals:', p.goals);
    console.log('Category:', goalsCategory(p.goals));
    console.log('ASCII:', p.asciiName);
    console.log('Binary:', asciiToBinary(p.asciiName));
}
