<template>
  <div class="background">
    <div>
      <div class="error" v-if="error">{{ error }}</div>
      <h3 class="Winners">2024 WINNERS!</h3>
    </div>
    <div class="create-post">
      <label class="visually-hidden" for="create-post">Post Title</label>
      <input class="input" type="text" id="create-post" v-model="text" placeholder="" />
      <button class="updateStyling" @click="showDiv">Update</button>
      <div v-show="showDivs">
        <div class="file-input-container">
          <label for="image">Scorecard</label>
          <div class="input-wrapper">
            <button type="button" class="hidden">Choose File</button>
            <label class="visually-hidden" for="image">Image</label>
            <input type="file" id="image" @change="onImageChange" class="hidden" />
          </div>
        </div>
        <label class="visually-hidden" for="password">Password</label>
        <input class="input" type="password" id="password" v-model="password" placeholder="Password" />
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
        <tr v-for="post in paginatedPosts" :key="post._id" @click="openImage(post.text.image)">
          <td :style="getPostStyle(post)">{{ formatDate(post.createdAt) }}</td>
          <td :style="getPostStyle(post)">{{ post.text.text }}</td>
        </tr>
      </tbody>
    </table>
    <div class="no-results-container" v-else>
      <p class="no_results_text">No 2024 Results</p>
    </div>
  </div>
  <br>
  <div class="pagination" v-if="totalPages > 1">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" class="previousBtn">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" class="nextBtn">Next</button>
  </div>
  <div class="homePageImage" alt="home page image"></div>
</template>

<script>
import PostService from "../PostService";

export default {
  data() {
    return {
      error: "",
      text: "",
      image: null,
      record: false,
      posts: [],
      password: "",
      showDivs: false,
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.posts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.pageSize);
    },
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    showDiv() {
      this.showDivs = true;
    },
    async fetchPosts() {
      try {
        const allPosts = await PostService.getPosts();
        const filteredPosts = this.filterPostsByYear(allPosts, 2024);
        const sortedPosts = filteredPosts.sort((a, b) => b.createdAt - a.createdAt);
        this.posts = sortedPosts;
      } catch (err) {
        this.error = err.message;
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
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
    onImageChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.image = e.target.result;
      };
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
    getPostStyle(post) {
      return {
        color: post.text.record ? 'rgb(131, 112, 4)' : 'inherit',
        backgroundColor: post.text.record ? '#1c1c1c' : 'inherit',
      };
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
      const postData = {
        text: this.text,
        image: this.image,
        record: this.record
      };
      await PostService.insertPost(postData);
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

.no_results_text {
  color: #7c2020;
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
  margin-left: 35px;
  border-radius: 5px;
  color: rgb(221, 221, 221);
  padding: 0 10px;
  background-color: #1414146c;
  margin-bottom: 15px;
}

.file-input-container {
  text-align: center;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.hidden {
  display: none;
}

.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
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
  padding-left: 10px;
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
  box-shadow: 5px 5px 30px black;
  min-height: 220px;
}

.pagination {
  margin-bottom: 20px;
}

.previousBtn {
  background-color: #aed8e6;
  border-radius: 4px;
  color: white;
  padding: 5px;
  margin: 5px;
}

.nextBtn {
  background-color: #aed8e6;
  border-radius: 4px;
  color: white;
  padding: 5px;
  margin: 5px;
}
</style>