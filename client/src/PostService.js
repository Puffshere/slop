import axios from 'axios';

const url = 'api/posts/';

class PostService {
    static async getPosts() {
        const res = await axios.get(url);
        const data = res.data;
        return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
    }
    static async insertPost(text) {
        return await axios.post(url, {
            text
        });
    }
    static async deletePost(id) {
        return await axios.delete(`${url}${id}`);
    }
}

export default PostService;