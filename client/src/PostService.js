import axios from 'axios';

const url = 'api/posts/';

class PostService {
  // Get all posts
  static async getPosts() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      // Ensure data is always an array
      if (Array.isArray(data)) {
        return data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }));
      } else {
        return []; // If somehow the data isn't an array, return an empty array
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  static async insertPost(text, image, record) {
    return await axios.post(url, {
      text,
      image,
      record
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
