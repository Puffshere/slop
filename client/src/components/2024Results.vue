<template>
  <div class="results">
    <div class="background">
      <h1>2024 Final Results</h1>
    </div>
  </div>
  <br>
  <div class="container flex">
    <table>
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
  </div>
</template>
  
<script>
import PostService from "../PostService";


export default {
  data() {
    return {
      error: "",
      posts: [],
      showDivs: false,
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

.results {
  background-image: url('../assets/main_results_background.webp');
  background-size: cover;
  min-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  box-shadow: 5px 5px 30px black;
}

.background,
h1 {
  color: rgb(204, 202, 202);
  font-size: xx-large;
  letter-spacing: 1px;
  text-shadow: 13px 13px 3px rgba(59, 59, 61, 0.651);
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
</style>