import axios from 'axios';

const url = 'api/posts/';

class PostService {
  static async getPost() {
    const res = await axios.get(url);
    const post = res.data;
    return {
      ...post,
      createdAt: new Date(post.createdAt),
    };
  }

  static async insertPost(text) {
    return await axios.post(url, {
      text,
    });
  }

  static async updatePost(id, updateData) {
    return await axios.put(`${url}${id}`, updateData);
  }

  static async deletePost(id) {
    return await axios.delete(`${url}${id}`);
  }
}

export default PostService;
