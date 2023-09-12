<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <h3 class="Winners">2023 WINNERS!</h3>
  </div>
  <div class="create-post">
    <label for="create-post">Today's Winner!</label>
    <br />
    <input type="text" id="create-post" v-model="text" placeholder="" />
    <button class="updateStyling" @click="showDiv">Update</button>
    <div v-show="showDivs">
      <br />
      <input type="password" id="password" v-model="password" placeholder="Enter Password" />
      <button class="postStyling" v-on:click="createPost">Post</button>
    </div>
  </div>
  <br />
  <div class="container flex">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id">
          <td>
            {{
              `${post.createdAt.getMonth() + 1
              }/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`
            }}
          </td>
          <td>{{ post.text }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import PostService from "../PostService";
import axios from 'axios';

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
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    showDiv() {
      this.showDivs = true;
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
      // this.posts = await PostService.getPosts();
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0 auto;
}
.error {
  opacity: 1;
  /* transition: opacity 5s ease-in-out; */
  color: red;
  position: absolute;
  z-index: 5;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.Winners {
  color: rgb(131, 112, 4);
  font-size: 25px;
  padding-bottom: 10px;
}

.updateStyling {
  padding-left: 5px;
}

.postStyling {
  padding-left: 5px;
}

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
</style>