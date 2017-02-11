/**
 * Improve your flag freeze tag game.
 * 
 * We'll be building upon the freeze tag game from this weekend for tonight. Ideally we get rid of some of the 
 * if (....) statements and instead create different types of objects that know how to do different things 
 * (i.e. a chaser's tag() will be a bit different than a runner's tag()).
 * 
 * Before starting this, it's important that you finish and submit your weekend assignment. That will simplify your 
 * work here.
 * 
 * Goal
 * 
 * Right now we've got single functions that do several different things depending on the context they're called in. 
 * For example, if a chaser calls tag() on a runner, one thing happens, but if a runner calls it on another runner 
 * then a totally different behavior happens (this is also true of won()). Instead of doing that, let's break this up.
 * 
 * 1. Modify your Team object so that its the parent type of all types of teams. You should have two types of teams: 
 * RunnerTeam and 
 * ChaserTeam. 
 * 
 * Move some properties to the Team prototype, and others to the RunnerTeam and ChaserTeam prototype.
 * 
 * 2. Create a Game object that keeps track of the runner team and the chaser team (suggestion: create a this.chasers 
 * and this.runners property on the game). Your Game object should also have the following capabilities:
 * - complete() returns true if there is a winner, and false if the game is still ongoing
 * - winner() returns the team object of the winner if there is one, otherwise returns null
 * 
 * 3. Once you're done with #2, you can remove Team.won() and depend instead on the functions available on the game.
 * Modify your 2-3 scenarios to use the new functionality.
 */

// NOTE TO SELF:
// Prototypes being heirarchical, we might equate them to breakpoints in foundation when optimizing for a mobile
// view insofar as we are saying to our code: "we have some rules in place; if you already have some rules, follow
// them, but IF NOT, follow our rules!" By this method, we can use specific rules for constructors, but specifically
// omit rules that we want to carry over across multiple functions (constructors) which will cause them to
// default to the parent prototype. Hopefully this makes sense and you know yourself well enough to know what you
// needed to hear to understand.


function Team(name) {
    this.name = name;
    this.size = 5;
    this.roster = [];
};

Team.prototype.add = function (player) {
    if (this.roster.length < this.size) {
        player.team = this.name; //this one could be weird. Check here if it acts up.
        this.roster.push(player);
        return player.name === this.name // + ' was added to ' + player;
    }
};

// Team.prototype.won = function (losers) {
//     if (this.name === "run") {
//         for (let i = 0; i < this.roster.length; i++) {
//             if (this.roster[i].flag === true) {
//                 return true
//             }
//         }
//     } else if (this.name === "chase") {
//         console.log('Team is chasers');
//         console.log('length of "runners" is: ' + losers.roster.length)
//         let frozenRunners = 0;
//         for (let i = 0; i < losers.roster.length; i++) {
//             if (losers.roster[i].frozen === true) { // if the frozen status of each member of runners is true...
//                 frozenRunners = frozenRunners + 1;                  // add 1 to the count
//             }
//         }
//         console.log("Amount of frozen runners is " + frozenRunners);
//         if (frozenRunners === losers.roster.length) { // if the count of frozen runners is equal to the roster length
//             console.log("Chasers win!");
//             return true
//         } else {
//             console.log("Chasers haven't won... yet.")
//             return false
//         }

//     }
// };

function ChaserTeam(name) { // create a constructor called ChaserTeam with a "player" parameter
    this.name = name;
    this.size = 5;
    this.roster = [];
};
ChaserTeam.prototype = Team.prototype;   // "append" the ChaserTeam prototype to the Team prototype.

function RunnerTeam (name) {
    this.name = name;
    this.size = 5;
    this.roster = [];
};

RunnerTeam.prototype = Team.prototype;

function Player(name) {
    this.name = name;
    this.team = "";
    this.frozen = false;
    this.flag = false;
    this.tag = function tag(player) {
        console.log(this.name + ' is tagging ' + player.name);
            if (this.team === "Chasers" && player.team === "Runners") {
                return player.frozen = true
            } else if (this.frozen === false && this.team === "Runners" && player.team === "Runners") {
                return player.frozen = false
            } 
    };
    this.getFlag = function getFlag(flag) {
        if (this.team === "Runners") {
            Runners.flag = true;
            console.log(this.name + ' retrieved the flag and wins the game!');
        return this.flag = true
        } else {
            console.log("Chasers can't get flags");
            return false
        }
    }
};

let Chasers = new ChaserTeam('Chasers');
console.log(Chasers);
let Runners = new RunnerTeam('Runners');
console.log(Runners);

let taggers = [
    new Player('Tony'),
    new Player('Leo'),
    new Player('Willa'),
    new Player('Ted'),
    new Player('Odette'),
    new Player('Siobahn'),
];

p1 = taggers[0];
p2 = taggers[1];
p3 = taggers[2];
p4 = taggers[3];
p5 = taggers[4];
p6 = taggers[5];

Runners.add(p1);
Runners.add(p2);
Runners.add(p3);
Runners.add(p4);

Chasers.add(p5);
Chasers.add(p6);

let game = {
    runners: Runners,
    chasers: Chasers,

    complete: function complete() {
        
        this.chasersWin();

        if (this.chasers.won === true || this.runners.flag === true) {
            return true
        }   else {
            return false
        }
    },

    winner: function winner() {
        if (this.complete() === true && this.runners.flag === true) {
            return this.runners
        } else if (this.complete() === true && this.chasers.won === true) {
            return this.chasers
        } else {
            return null
        }
        },
    chasersWin: function () {
        let frozenRunners = 0;
        for (let i = 0; i < this.runners.roster.length; i++) {
            if (this.runners.roster[i].frozen === true) {
                frozenRunners = frozenRunners + 1;
            }
        }
        if (frozenRunners === this.runners.roster.length) {
            console.log("Chasers win!");
            return this.chasers.won = true
        } else {
            return this.chasers.won = false
        }
    }
    };

console.log (game);

console.log(game.complete());
console.log(game.winner());

function Flag(color) {
    this.color = color;
    this.isPretty = true;
    this.isCaptured = false;
}

let flag = new Flag('yellow');

console.log(flag);

/** WIN SCENARIO ONE */
function gameOne() {
console.log(`BEGIN GAME ONE`);
console.log(p5.getFlag());
console.log(p1.getFlag());

console.log("Is game complete? " + game.complete());

console.log(game.winner());
console.log(`END GAME ONE`)
};

/** WIN SCENARIO TWO */
function gameTwo() {
    console.log(`BEGIN GAME TWO`)
p6.tag(p1);
//console.log(p1.name + ' is frozen? ' + p1.frozen);
p5.tag(p2);
p6.tag(p3);
p5.tag(p4);

console.log(Runners);

console.log("Is game complete? " + game.complete());
console.log(game.winner());
console.log(`END GAME TWO`)
};

gameOne();
gameTwo();