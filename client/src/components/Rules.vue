<template>
  <div class="background">
    <div class="textContainer">
      <h1 class="headerText">These are your rules for 2024!</h1>
    </div>
  </div>
  <br>
  <br>
  <div class="container">
    <div class="rulesContainer">
      <ol class="rulesList">
        <li>Each team consists of four players, divided into pairs. Each pair will play a scramble format within the team.
        </li>
        <li>Both players in a pair tee off on each hole. The best of the two tee shots is selected for the next shot.</li>
        <li>If a course has special rules that pertain to that course they must be played how the course designates. This
          includes
          power line rules, drop zone rules, ground under repair rules, etc..
        </li>
        <li>After the best tee shot is selected, both players take their second shot from that spot. This process
          continues
          until the ball is holed.</li>
        <li>When playing from the selected spot, players may place the ball within one club length, no closer to the hole,
          maintaining the same condition (e.g., rough or fairway).</li>
        <li>On the green, the ball should be placed within six inches of the selected spot, not nearer to the hole.</li>
        <li>When playing from a bunker, players must not ground their clubs before the shot. If a player grounds their
          club,
          a penalty stroke is incurred. The penalty stroke is only added if the shot from the player who grounded their
          club
          is used.
        </li>
        <li>White stakes or lines define out of bounds. A penalty stroke is incurred, and the team must play from the
          original spot or use their partner's shot.</li>
        <li>For lateral water hazards (marked with red stakes/lines), players may drop within two club lengths from where
          the ball last crossed the margin of the hazard, with a one-stroke penalty.</li>
        <li>The team may declare a ball unplayable at any spot on the course, except in a water hazard. The team incurs a
          one-stroke penalty and must play from within one club length of the unplayable spot.</li>
        <li>No max score on a hole, what you get is what you get.</li>
        <li>Players will use the white tee box or its equivalent to tee off.</li>
        <li>There are no gimme putts. All holes must be finished out till the ball drops.</li>
        <li>Players are not to touch the opposing teams ball at anytime unless directed to do so. First time will be a
          warning
          with the second time incurring a penalty stroke.
        </li>
        <li>The pair with the best score on the previous hole has the honor at the next tee.</li>
        <li>Players arriving late can join mid-round but will incur 1 penalty shot for each missed hole.</li>
        <li>The lowest combined score for the pair on each hole counts towards the team's total score.</li>
        <li>Any disputes regarding rules should be resolved by a designated rules official or through a majority decision
          of
          the team captains present.</li>
        <li>Players are expected to conduct themselves in the spirit of the game, displaying sportsmanship, respect, and
          consideration for other players and the course.</li>
        <li>IN CASE OF A TIE, score will revert to match play with the team winning the most holes the victor. In case of
          a match play tie, a score system will be used to generate a winner with a par equaling 1 point, a birdie
          counting as 2 points, an eagle counting as 3 points, an albatross counting as 4 points, and a hole in one counting as an automatic points win. In
          case of a points tie the winner will be chosen by working backwards on the card to the last hole won by a team.
          In the case of a complete even game through 18 holes, winner will be chosen by a closes to pin on the neareast par
          3.
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: url('../assets/rules_header_background.webp') center/contain no-repeat;
  width: 100%;
  box-shadow: 5px 5px 30px black;
  display: flex;
  align-items: center;
  margin-top: -40px;
  background-color: black;
}

.textContainer {
  width: 50%;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.headerText {
  color: white;
  font-size: 30px;
}

.container {
  padding: 12px;
  box-shadow: 5px 5px 30px black;
}

.rulesContainer {
  background-color: #cccccc;
  margin-top: -40px;
  box-shadow: -10px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.rulesList {
  counter-reset: rule-number;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.rulesList li {
  counter-increment: rule-number;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.rulesList li:last-child {
  border-bottom: none;
}

.rulesList li::before {
  content: counter(rule-number) ".";
  position: absolute;
  left: 0;
  font-size: 18px;
  font-weight: bold;
  color: #4a90e2;
}

.rulesList li:hover {
  background-color: #eef4fd;
  cursor: pointer;
}

@media (max-width: 768px) {
  .rulesContainer {
    padding: 10px;
  }

  .rulesList li {
    font-size: 14px;
  }
}</style>