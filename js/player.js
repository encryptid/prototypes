/** 
 * Most commonly, we'll either export functions or objects.
 */

module.exports = function Player(name, teamName) {
    this.name = name;
    this.team = teamName;
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
            console.log(this.name + ' retrieved the flag and wins the game!');
        return this.flag = true
        } else {
            return "Chasers can't get flags"
        }
    }
}