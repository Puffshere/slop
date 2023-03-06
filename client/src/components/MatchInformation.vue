<template>
    <div>
      <h3>Scores 2023</h3>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="create-post">
      <label for="create-post">Today's Winner!</label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        placeholder=""
      />
      <input type="password" id="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="createPost">Post</button>
    </div>
    <br />
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
          >
            <td>
              {{
                `${
                  post.createdAt.getMonth() + 1
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
  </style>