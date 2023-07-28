<template>
  <!-- <Transition name="fade" enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"> -->
  <section class="records" id="records-section">
    <br>
    <div>
      <h1 class="courseRecords">Course Records</h1>
    </div>
    <div class="container">
      <table>
        <thead>
          <th colspan="3">
            SINGLES
          </th>
          <tr>
            <th>Course</th>
            <th>Score</th>
            <th>Holder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cottonwood</td>
            <td>96</td>
            <td>Shawn</td>
          </tr>
          <tr>
            <td>Legends Temeku</td>
            <td>94</td>
            <td>Jackson</td>
          </tr>
          <tr>
            <td>AB North</td>
            <td>96</td>
            <td>Shawn</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div class="container">
      <table>
        <thead>
          <th colspan="3">
            2 PLAYERS
          </th>
          <tr>
            <th>Course</th>
            <th>Score</th>
            <th>Holder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chula Vista</td>
            <td>79</td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td>Menifee Palms</td>
            <td>79</td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td>Menifee Lakes</td>
            <td>79</td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td>Golf Club Rancho</td>
            <td>79</td>
            <td>Shawn/Jackson</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div class="container">
      <table>
        <thead>
          <th colspan="3">
            4 PLAYERS
          </th>
          <tr>
            <th>Course</th>
            <th>Score</th>
            <th>Holder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chula Vista</td>
            <td>69</td>
            <td>The Squad</td>
          </tr>
          <tr>
            <td>Cottonwood</td>
            <td>73</td>
            <td>The Squad</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <!-- </transition> -->
</template>
  
<script>
export default {
  data() {
    return {
      error: "",
      text: "",
      posts: [],
      password: "6980"
    };
  },
  methods: {
    async createPost() {
      // Check if the entered password is correct
      if (this.password !== "correctPassword") {
        this.error = "Incorrect password!";
        return;
      }

      // Make post request if password is correct
      // ...
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid rgb(100, 100, 100);
  padding: 8px;
}

.courseRecords {
  color: rgb(131, 112, 4);
  font-size: 25px;
  padding-bottom: 15px;
}
</style>