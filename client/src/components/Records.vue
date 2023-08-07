<!-- These are the records -->
<template>
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
            <td class="pointer"><a
                href="https://cottonwood.ezlinksgolf.com/index.html#/search?utm_source=google&utm_medium=organic">Cottonwood</a>
            </td>
            <td>96</td>
            <td>Shawn</td>
          </tr>
          <tr>
            <td class="pointer"><a href="https://thelegendsgc.com/online-tee-times/">Legends Temeku</a></td>
            <td>94</td>
            <td>Jackson</td>
          </tr>
          <tr>
            <td class="pointer"><a
                href="https://myffr.navyaims.com/navywest/wbwsc/navywest.wsc/search.html?module=GR&secondarycode=28&begintime=07%3A00+am&_csrf_token=fs0Y1I670L6A3M2T133L424D5M4U5M591Y70624R5K695L4G5X571J5F4P425F1J0D4T5B5S0G654G6D480A014I5C5A1N5M6H6M6J0S5Y5251646G5R4U516I0A034T5T">AB
                North</a></td>
            <td class="pointer scorecard">
              <a @click="ABNorth1" target="_blank">96</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="admiral baker north 1 scorecard">
            </td>
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
            <td class="pointer"><a href="https://www.chulavistagc.com/bookteetimes">Chula Vista</a></td>
            <td class="pointer scorecard">
              <a @click="chula_vista" target="_blank">79</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="chula vista scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td class="pointer"><a href="https://foreupsoftware.com/index.php/booking/19103/968#/teetimes">Menifee
                Palms</a></td>
            <td>79</td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td class="pointer"><a href="https://foreupsoftware.com/index.php/booking/19103/954#/teetimes">Menifee
                Lakes</a></td>
            <td class="pointer scorecard">
              <a @click="lakes" target="_blank">79</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="lakes scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td class="pointer"><a href="https://www.thegolfclubatranchocalifornia.com/book-a-tee-time/">Golf Club
                Rancho</a></td>
            <td class="pointer scorecard">
              <a @click="rancho" target="_blank">75</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="golf club at rancho scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>
          <tr>
            <td class="pointer"><a
                href="https://www.chronogolf.com/club/miramar-memorial-golf-course#?course_id=3229&nb_holes=18">Miramar</a>
            </td>
            <td class="pointer scorecard"><a @click="miramar" target="_blank">81</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="miramar scorecard">
            </td>
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
            <td class="pointer"><a href="https://www.chulavistagc.com/bookteetimes">Chula Vista</a></td>
            <td>69</td>
            <td>The Squad</td>
          </tr>
          <tr>
            <td class="pointer"><a
                href="https://cottonwood.ezlinksgolf.com/index.html#/search?utm_source=google&utm_medium=organic">Cottonwood</a>
            </td>
            <td>73</td>
            <td>The Squad</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      error: "",
      text: "",
      posts: [],
      password: "6980",
      imageSrc: ""
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
    },
    miramar() {
      const imageSrc = require('../assets/scorecards/miramar.jpg');
      window.open(imageSrc, '_blank');
      // Use this code to open up scorecard image in table
      // if (this.imageSrc === require('../assets/bike/bike.jpg')) {
      //   this.imageSrc = '';
      // } else {
      //   this.imageSrc = require('../assets/bike/bike.jpg');
      // }
    },
    lakes() {
      const imageSrc = require('../assets/scorecards/lakes.jpg');
      window.open(imageSrc, '_blank');
    },
    chula_vista() {
      const imageSrc = require('../assets/scorecards/chula_vista.jpg');
      window.open(imageSrc, '_blank');
    },
    ABNorth1() {
      const imageSrc = require('../assets/scorecards/ABNorth1.jpg');
      window.open(imageSrc, '_blank');
    },
    rancho() {
      const imageSrc = require('../assets/scorecards/rancho2.jpg');
      window.open(imageSrc, '_blank');
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

.pointer {
  cursor: pointer;
}

.scorecard {
  color: rgb(131, 112, 4);
}

.courseRecords {
  color: rgb(131, 112, 4);
  font-size: 25px;
  padding-bottom: 15px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>