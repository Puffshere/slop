<template>
  <div class="golf-score">
    <h1>Golf Scores</h1>
    <p>
      Record your scores and view them in the table below.
    </p>
    <!-- <h3>Input Score</h3>
    <ul>
      <li>Week Number: <input type="text" name="week-number"/></li>
      <li>Score: <input type="text" name="score"/></li>
      <li><button>Submit Score</button></li>
    </ul> -->
    <h3>Scores Table</h3>
    <table>
      <thead>
        <tr>
          <th>Week Number</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>87</td>
        </tr>
        <tr>
          <td>2</td>
          <td>94</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GolfScore',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

</style>