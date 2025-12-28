<template>
  <section class="records" id="records-section">
    <h1 class="courseRecords">Course Records</h1>
    <div class="background"></div>
    <br>
    <div class="container flex">
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
            <td class="pointer booking"><a href="https://aviara.ezlinksgolf.com/index.html#/search">
                Aviara</a></td>
            <td class="pointer scorecard">
              <a @click="aviara_singles" target="_blank">105</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="aviara singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://cottonwood.ezlinksgolf.com/index.html#/search?utm_source=google&utm_medium=organic">Cottonwood</a>
            </td>
            <td>96</td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://thelegendsgc.com/online-tee-times/">Legends Temeku</a></td>
            <td>94</td>
            <td>Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://letsgo.golf/mission-trails-golf-course/teeTimes/mission-trails-golf-course-california?">
                Mission Trails</a></td>
            <td class="pointer scorecard">
              <a @click="MissionTrailsSingles" target="_blank">88</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="mission trails singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://www.chronogolf.com/club/miramar-memorial-golf-course">
                Miramar</a></td>
            <td class="pointer scorecard">
              <a @click="miramar_singles" target="_blank">95</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="miramar singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://myffr.navyaims.com/navywest/wbwsc/navywest.wsc/search.html?module=GR&secondarycode=28&begintime=07%3A00+am&_csrf_token=fs0Y1I670L6A3M2T133L424D5M4U5M591Y70624R5K695L4G5X571J5F4P425F1J0D4T5B5S0G654G6D480A014I5C5A1N5M6H6M6J0S5Y5251646G5R4U516I0A034T5T">AB
                North</a></td>
            <td class="pointer scorecard">
              <a @click="ABNorth1" target="_blank">94</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="admiral baker north 1 scorecard">
            </td>
            <td>Butryn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://myffr.navyaims.com/navywest/wbwsc/navywest.wsc/search.html?interfaceparameter=webtrac_southwest&module=GR&secondarycode=29&begintime=07%3A00+am&_csrf_token=eJ72010N1J703Q2V263I2L4J6X5Z6I586N634K6E681H5P5U6V5D036Y4H5F526258526N67705S5W576O1K5M4N556J055U5E5Q50195F4R57510G5Y4L596B1J5R4T4M">AB
                South</a></td>
            <td class="pointer scorecard">
              <a @click="ABSouth1" target="_blank">97</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="admiral baker south 1 scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://www.redhawkgolfcourse.com/tee-times/">Redhawk</a></td>
            <td class="pointer scorecard">
              <a @click="redhawk_singles" target="_blank">96</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="redhawk singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/19461/1676#/teetimes">Seven
                Hills</a></td>
            <td class="pointer scorecard">
              <a @click="seven_hills_singles" target="_blank">86</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="seven hills singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://w.cps.golf/TemeculaCreekInnV3/(S(fr3y3u3xeewg2vbdj04tjg00))/Home/nIndex?CourseId=8,9,12&Date=2024-1-17&Time=AnyTime&Player=99&Hole=Any">Temecula
                Creek (CS)</a></td>
            <td class="pointer scorecard">
              <a @click="temecula_creek_singles" target="_blank">97</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="temecula creek singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://nativeoakspp.ezlinksgolf.com/index.html#/search">Navive
                Oaks</a></td>
            <td class="pointer scorecard">
              <a @click="native_oaks_singles" target="_blank">102</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="native oaks singles scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/19103/968#/teetimes">Menifee
                Palms</a></td>
            <td class="pointer scorecard">
              <a @click="palms_singles" target="_blank">93</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="palms scorecard">
            </td>
            <td>Shawn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/19103/968#/teetimes">Menifee
                Lakes</a></td>
            <td class="pointer scorecard">
              <a @click="lakes_singles" target="_blank">102</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="palms scorecard">
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
            <td class="pointer booking"><a
                href="https://myffr.navyaims.com/navywest/wbwsc/navywest.wsc/search.html?module=GR&secondarycode=28&begintime=07%3A00+am&_csrf_token=fs0Y1I670L6A3M2T133L424D5M4U5M591Y70624R5K695L4G5X571J5F4P425F1J0D4T5B5S0G654G6D480A014I5C5A1N5M6H6M6J0S5Y5251646G5R4U516I0A034T5T">AB
                North</a></td>
            <td class="pointer scorecard">
              <a @click="ABNorth2" target="_blank">76</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="admiral baker north 2 man scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://myffr.navyaims.com/navywest/wbwsc/navywest.wsc/search.html?interfaceparameter=webtrac_southwest&module=GR&secondarycode=29&begintime=07%3A00+am&_csrf_token=eJ72010N1J703Q2V263I2L4J6X5Z6I586N634K6E681H5P5U6V5D036Y4H5F526258526N67705S5W576O1K5M4N556J055U5E5Q50195F4R57510G5Y4L596B1J5R4T4M">AB
                South</a></td>
            <td class="pointer scorecard">
              <a @click="ABSouth2" target="_blank">78</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="admiral baker south 2 man scorecard">
            </td>
            <td>Bock/Butryn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://i-golfing.teesnap.net/">California Oaks</a></td>
            <td class="pointer scorecard">
              <a @click="california_oaks_doubles" target="_blank">73</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="california oaks doubles scorecard">
            </td>
            <td>Bock/Butryn</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://www.chulavistagc.com/bookteetimes">Chula Vista</a></td>
            <td class="pointer scorecard">
              <a @click="chula_vista" target="_blank">79</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="chula vista scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/21229/7359#/teetimes">Cross
                Creek</a></td>
            <td class="pointer scorecard">
              <a @click="cross_creek_doubles" target="_blank">84</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="cross creek doubles scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/19103/968#/teetimes">Menifee
                Palms</a></td>
            <td class="pointer scorecard">
              <a @click="palms_doubles" target="_blank">78</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="palms scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://foreupsoftware.com/index.php/booking/19103/954#/teetimes">Menifee
                Lakes</a></td>
            <td class="pointer scorecard">
              <a @click="lakes_doubles" target="_blank">74</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="lakes scorecard">
            </td>
            <td>Shawn/Bock</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
                href="https://www.chronogolf.com/club/miramar-memorial-golf-course">Miramar</a>
            </td>
            <td class="pointer scorecard">
              <a @click="miramar_doubles" target="_blank">77</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="miramar doubles scorecard">
            </td>
            <td>Shawn/Bock</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://www.thegolfclubatranchocalifornia.com/book-a-tee-time/">Golf
                Club
                Rancho</a></td>
            <td class="pointer scorecard">
              <a @click="rancho" target="_blank">75</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="golf club at rancho scorecard">
            </td>
            <td>Shawn/Jackson</td>
          </tr>

          <tr>
            <td class="pointer booking"><a href="https://thelegendsgc.com/online-tee-times/">Legends Temeku</a>
            </td>
            <td class="pointer scorecard"><a @click="temeku2" target="_blank">80</a>
              <img :src="imageSrc" v-if="imageSrc !== ''" alt="temeku scorecard">
            </td>
            <td>Shawn/Ron-Jack/Bock</td>
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
            <td class="pointer booking"><a href="https://www.chulavistagc.com/bookteetimes">Chula Vista</a></td>
            <td>69</td>
            <td>The Squad</td>
          </tr>

          <tr>
            <td class="pointer booking"><a
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
    aviara_singles() {
      const imageSrc = require('../assets/scorecards/Aviara_singles.jpg');
      window.open(imageSrc, '_blank');
    },
    miramar_singles() {
      const imageSrc = require('../assets/scorecards/Miramar_singles.jpg');
      window.open(imageSrc, '_blank');
      // Use this code to open up scorecard image in table
      // if (this.imageSrc === require('../assets/bike/bike.jpg')) {
      //   this.imageSrc = '';
      // } else {
      //   this.imageSrc = require('../assets/bike/bike.jpg');
      // }
    },
    miramar_doubles() {
      const imageSrc = require('../assets/scorecards/Miramar_doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    lakes_doubles() {
      const imageSrc = require('../assets/scorecards/Lakes_doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    palms_singles() {
      const imageSrc = require('../assets/scorecards/palms-singles.jpg');
      window.open(imageSrc, '_blank');
    },
    lakes_singles() {
      const imageSrc = require('../assets/scorecards/menifee_lakes_singles.jpg');
      window.open(imageSrc, '_blank');
    },
    palms_doubles() {
      const imageSrc = require('../assets/scorecards/palms-doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    california_oaks_doubles() {
      const imageSrc = require('../assets/scorecards/California_Oaks_doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    chula_vista() {
      const imageSrc = require('../assets/scorecards/chula_vista.jpg');
      window.open(imageSrc, '_blank');
    },
    cross_creek_doubles() {
      const imageSrc = require('../assets/scorecards/Cross_Creek_doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    MissionTrailsSingles() {
      const imageSrc = require('../assets/scorecards/mission_trails_singles_88.jpg');
      window.open(imageSrc, '_blank');
    },
    ABNorth1() {
      const imageSrc = require('../assets/scorecards/ABNorth1-2.webp');
      window.open(imageSrc, '_blank');
    },
    ABSouth1() {
      const imageSrc = require('../assets/scorecards/ABSouth1-2.jpg');
      window.open(imageSrc, '_blank');
    },
    ABNorth2() {
      const imageSrc = require('../assets/scorecards/AB_North2.jpg');
      window.open(imageSrc, '_blank');
    },
    ABSouth2() {
      const imageSrc = require('../assets/scorecards/AB-south-2player.jpg');
      window.open(imageSrc, '_blank');
    },
    rancho() {
      const imageSrc = require('../assets/scorecards/rancho2.jpg');
      window.open(imageSrc, '_blank');
    },
    redhawk_singles() {
      const imageSrc = require('../assets/scorecards/Redhawk_singles.jpg');
      window.open(imageSrc, '_blank');
    },
    seven_hills_singles() {
      const imageSrc = require('../assets/scorecards/Seven_Hills_doubles.jpg');
      window.open(imageSrc, '_blank');
    },
    temecula_creek_singles() {
      const imageSrc = require('../assets/scorecards/Temecula_Creek_Singles.jpg');
      window.open(imageSrc, '_blank');
    },
    native_oaks_singles() {
      const imageSrc = require('../assets/scorecards/native-oaks-singles.jpg');
      window.open(imageSrc, '_blank');
    },
    temeku2() {
      const imageSrc = require('../assets/scorecards/temeku2.jpg');
      window.open(imageSrc, '_blank');
    }
  }
};
</script>

<style scoped>
.courseRecords {
  color: rgb(131, 112, 4);
  font-size: 35px;
  padding: 15px 0px;
  text-shadow: 1px 1px 1px rgb(156, 156, 156);
  background-color: rgb(220, 220, 221);
  box-shadow: 5px 5px 30px black;
}

.background {
  background: url('../assets/course_records_background_new.webp') center/cover no-repeat;
  min-height: 150px;
  padding: 20px;
  box-shadow: 5px 5px 30px black;
  max-width: 100%;
}

.container {
  margin: 0 auto;
  box-shadow: 5px 5px 30px black;
  padding: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid rgb(97, 97, 97);
  box-shadow: 1px 2px 5px rgb(53, 53, 53);
  padding: 8px;
}

.pointer {
  cursor: pointer;
}

.scorecard {
  color: rgb(131, 112, 4);
}

.booking {
  color: rgb(131, 112, 4);
}
</style>