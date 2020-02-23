// The Great Game

/*
Two teams meet in The Game World Championship. Some scientists consider this game to be the most intellectually challenging game in the world. You are given 2 strings describing the teams' actions in the final battle. Figure out who became the champion.

Input:

The input contains two strings of equal length : between 2 and 20 characters, inclusive. Each line describes the actions of one team.

Ouput:

Output TEAM 1 WINS if the first team won, TEAM 2 WINS if the second team won, and TIE if there was a tie.

Examples:

string team1 = "[]";
string team2 = "8<";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TEAM 2 WINS"
string team1 = "()[]8<";
string team2 = "[]()8<";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TIE"
string team1 = "[]";
string team2 = "()";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TEAM 1 WINS"
PUZZLES   FUNDAMENTALS   GAMES   ALGORITHMS
 */

function whoIsWinner(t1, t2){
  let t1Score = 0;
  let t2Score = 0;
  for (let i = 0; i < t1.length; i+=2) {
    if (t1.substring(i, i+2) === '8<' && t2.substring(i, i+2) === '[]') { t1Score++; }
    else if (t1.substring(i, i+2) === '[]' && t2.substring(i, i+2) === '()') { t1Score++; }
    else if (t1.substring(i, i+2) === '()' && t2.substring(i, i+2) === '8<') { t1Score++; }
    else if (t1.substring(i, i+2) === t2.substring(i, i+2)) { t1Score +=0; t2Score +=0; }
    else { t2Score++; }
  }
  if (t1Score === t2Score) { return 'TIE' }
  else return t1Score > t2Score ? 'TEAM 1 WINS' : 'TEAM 2 WINS';
}