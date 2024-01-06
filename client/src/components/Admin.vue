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
                        <th>Record</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <br>
                <tbody>
                    <tr v-for="post in posts" :key="post._id">
                        <td>{{ formatDate(post.createdAt) }}</td>
                        <td>{{ post.text.text }}</td>
                        <td>
                            <button @click="toggleRecord(post, index)">
                                {{ post.text.record ? 'Record' : 'Normal' }}
                            </button>
                        </td>
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
            if (this.username && this.password === 'shawn6980') {
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
        async toggleRecord(post, index) {
            try {
                const updatedRecord = !post.text.record;
                console.log('Data to be sent for update:', { 'text.record': updatedRecord });
                await PostService.updatePost(post._id, { 'text.record': updatedRecord });
            } catch (error) {
                console.error("Error toggling record:", error);
            }
        },
        async deletePost(postId, index) {
            try {
                await PostService.deletePost(postId);
                this.posts.splice(index, 1);
            } catch (error) {
                console.error("Error deleting post:", error);
            }
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