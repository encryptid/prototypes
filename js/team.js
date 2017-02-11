module.exports = function Team(name) {
    this.name = name;
    this.size = 5;
    this.roster = [];
    
    // this.add = function (player) {
    //     if (this.roster.length < this.size) {
    //         this.roster.push(player);
    //         return player + ' was added to ' + player;
    //     }
    // }
    // this.won = function won(losers) {
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
    // }

}