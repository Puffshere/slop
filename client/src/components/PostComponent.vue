<template>
  <div class="background">
    <div>
      <div class="error" v-if="error">{{ error }}</div>
      <h3 class="Winners">2024 WINNERS!</h3>
    </div>
    <div v-if="posts && posts.length > 0">
      <table>
        <thead class="head">
          <tr>
            <th>Date</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post._id" @click="openImage(post.image)">
            <td :style="getPostStyle(post)">{{ formatDate(post.createdAt) }}</td>
            <td :style="getPostStyle(post)">{{ post.text }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="no_results_text">No 2024 Results</p>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  data() {
    return {
      error: "",
      posts: [], // Ensure this is always an array
    };
  },
  async created() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const posts = await PostService.getPosts();
        console.log("Posts fetched from service:", posts); // Log to verify correct data
        this.posts = posts;
      } catch (err) {
        console.error("Error in fetchPosts:", err); // Log to identify any issues
        this.error = err.message;
      }
    },
    openImage(imageUrl) {
      if (imageUrl) {
        const image = new Image();
        image.src = imageUrl;
        image.style.maxWidth = '100%';
        image.style.maxHeight = '100%';
        image.style.display = 'block';
        image.style.margin = 'auto';
        image.style.position = 'absolute';
        image.style.top = '0';
        image.style.left = '0';
        image.style.bottom = '0';
        image.style.right = '0';

        const w = window.open("");
        w.document.body.style.margin = '0';
        w.document.body.style.height = '100vh';
        w.document.body.style.display = 'flex';
        w.document.body.style.alignItems = 'center';
        w.document.body.style.justifyContent = 'center';
        w.document.body.style.backgroundColor = 'black';
        w.document.body.appendChild(image);
      } else {
        alert('No image available for this post.');
      }
    },
    formatDate(dateStr) {
      if (!dateStr) return ''; // Check for null or undefined date
      let localDate = new Date(dateStr);
      localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
      return `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()}`;
    },
    getPostStyle(post) {
      return {
        color: post?.record ? 'rgb(131, 112, 4)' : 'inherit',
        backgroundColor: post?.record ? '#1c1c1c' : 'inherit',
      };
    },
  },
};
</script>

<style scoped>
/* Same CSS as before */
</style>
