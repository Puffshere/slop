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
        <li>To maintain pace, a maximum of double par (e.g., 6 strokes on a par-3) per hole is enforced.</li>
        <li>In case of a tie, a count-back system will be used, starting from the 18th hole backward.</li>
        <li>Handicap allowances are applied as per the course handicap rules.</li>
        <li>Golf carts are allowed but must adhere to the course's cart rules.</li>
        <li>Men will tee off from the men's tee box, and women from the women's tee box.</li>
        <li>To ensure pace of play, "ready golf" is encouraged. Players are advised to hit when ready and safe to do so.
        </li>
        <li>The pair with the best score on the previous hole has the honor at the next tee.</li>
        <li>Players arriving late can join mid-round but will incur a penalty for missed holes.</li>
        <li>The lowest combined score for the pair on each hole counts towards the team's total score.</li>
        <li>Any disputes regarding rules should be resolved by a designated rules official or through a majority decision
          of
          the team captains present.</li>
        <li>Players are expected to conduct themselves in the spirit of the game, displaying sportsmanship, respect, and
          consideration for other players and the course.</li>
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
}

.rulesContainer {
  background-color: #cccccc;
  margin-top: -40px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
  /* Added padding at the bottom for spacing */
  border-bottom: 1px solid #ddd;
  /* This adds a line between the items */
  position: relative;
}

/* Adjust the last item to not have a bottom border */
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
  /* Stylish blue for numbers */
}

/* Additional Styling */
.rulesList li:hover {
  background-color: #eef4fd;
  /* Light blue background on hover */
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
