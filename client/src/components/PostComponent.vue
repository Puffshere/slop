<template>
  <div class="background">
    <div>
      <div class="error" v-if="error">{{ error }}</div>
      <h3 class="Winners">2024 WINNERS!</h3>
    </div>
    <div class="create-post">
      <label for="create-post">Today's Winner!</label>
      <br>
      <input class="input" type="text" id="create-post" v-model="text" placeholder="" />
      <button class="updateStyling" @click="showDiv">Update</button>
      <div v-show="showDivs">
        <br />
        <input type="password" id="password" v-model="password" placeholder="Enter Password" />
        <button class="postStyling" v-on:click="createPost">Post</button>
      </div>
    </div>
    <br>
  </div>
  <br />
  <div class="container flex">
    <table v-if="posts.length">
      <thead class="head">
        <tr>
          <th>Date</th>
          <th>Winner</th>
        </tr>
      </thead>
      <br>
      <tbody>
        <tr v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id">
          <td>{{ formatDate(post.createdAt) }}</td>
          <td>{{ post.text }}</td>
        </tr>
      </tbody>
    </table>
    <div class="no-results-container" v-else>
      <p class="no_results_text">No 2024 Results</p>
    </div>
  </div>
  <br>
  <!-- <div v-if="posts.length < 3"> -->
  <div class="homePageImage" alt="home page image">
  </div>
</template>
  
<script>
import PostService from "../PostService";


export default {
  data() {
    return {
      error: "",
      text: "",
      posts: [],
      password: "",
      showDivs: false,
      userInput: '',
      response: ''
    };
  },
  async created() {
    try {
      const allPosts = await PostService.getPosts();
      this.posts = this.filterPostsByYear(allPosts, 2024);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    showDiv() {
      this.showDivs = true;
    },
    filterPostsByYear(posts, year) {
      return posts.filter(post => {
        const postYear = new Date(post.createdAt).getFullYear();
        return postYear === year;
      });
    },
    formatDate(dateStr) {
      let localDate = new Date(dateStr);
      localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
      return `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
    },
    async createPost() {
      if (this.password !== "6980") {
        this.error = "Incorrect password!";
        this.showDivs = false;
        let opacity = 1;
        let interval = setInterval(() => {
          opacity -= 0.1;
          if (opacity < 0) {
            this.error = null;
            clearInterval(interval);
          } else {
            document.querySelector(".error").style.opacity = opacity;
          }
        }, 400);
        return;
      }
      await PostService.insertPost(this.text);
      window.location.reload();
    },
  },
};
</script>
  
<style scoped>
.container {
  margin: 0 auto;
  box-shadow: 5px 5px 30px black;
  padding: 12px;
}

.error {
  opacity: 1;
  color: red;
  position: absolute;
  z-index: 5;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.no-results-container {
  width: 100%;
}

.no-results {
  color: #2c3e50;
  text-align: center;
}

.no_results_text {
  font-size: 30px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px white;
}

.Winners {
  color: rgb(253, 253, 253);
  text-shadow: 1px 4px 3px black;
  font-size: 25px;
  padding-bottom: 10px;
  letter-spacing: 2px;
}

.input {
  max-width: 150px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  color: rgb(39, 39, 39);
  padding: 0 10px;
}

.background {
  background-image: url('../assets/golf_background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  box-shadow: 5px 5px 30px black;
}

.create-post {
  color: white;
  font-size: 20px;
  text-shadow: 1px 2px 2px black;
}

.updateStyling {
  padding-left: 5px;
  text-shadow: 1px 2px 2px black;
}

.postStyling {
  padding-left: 5px;
  text-shadow: 1px 2px 2px black;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.head {
  border-bottom: 3px solid rgb(104, 104, 104);
  box-shadow: 5px 5px 30px rgb(53, 53, 53);
}

table,
th,
td {
  border: 1px solid rgb(97, 97, 97);
  box-shadow: 1px 2px 5px rgb(53, 53, 53);
  padding: 8px;
}

.homePageImage {
  background-image: url('../assets/golf_image.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  box-shadow: 5px 5px 30px black;
  min-height: 250px;
}
</style>