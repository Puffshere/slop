<template>
    <h1 class="adminTitle">Admin Page</h1>
    <div class="login-container" v-if="!isLoggedIn">
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
    <div class="content" v-else>
        <br>
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
                    <tr v-for="post in posts" :key="post._id">
                        <td>{{ formatDate(post.createdAt) }}</td>
                        <td>{{ post.text.text }}</td>
                        <td><button @click="deletePost(post._id, index)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="no-results-container" v-else>
                <p class="no_results_text">No 2024 Results</p>
            </div>
        </div>
    </div>
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
            username: '',
            password: '',
            isLoggedIn: false
        };
    },
    async created() {
        this.fetchPosts();
    },
    methods: {
        showDiv() {
            this.showDivs = true;
        },
        login() {
            if (this.username && this.password === 'shawn69') {
                this.isLoggedIn = true;
            } else {
                alert('Invalid credentials!');
            }
        },
        async fetchPosts() {
            try {
                const allPosts = await PostService.getPosts();
                this.posts = this.filterPostsByYear(allPosts, 2024);
            } catch (err) {
                this.error = err.message;
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        async deletePost(postId, index) {
            try {
                await PostService.deletePost(postId);
                this.posts.splice(index, 1);
            } catch (error) {
                console.error("Error deleting post:", error);
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
    },
};
</script>
  
<style scoped>
.container {
    margin: 0 auto;
    box-shadow: 5px 5px 30px black;
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.login-container {
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
}

.login-container input {
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

.login-container button {
    width: 100%;
    padding: 10px;
    background: linear-gradient(268deg, rgb(193, 220, 230), lightblue);
    color: rgb(27, 27, 27);
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.adminTitle {
    font-size: xx-large;
    letter-spacing: 2px;
    text-shadow: 2px 2px 2px white;
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

.no-results-container {
    width: 100%;
}

.no_results_text {
    color: #7c2020;
    font-size: 30px;
    letter-spacing: 1px;
    text-shadow: 2px 2px 2px white;
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