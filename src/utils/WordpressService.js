import axios from "axios";

const WordpressService = {
  getPosts: (page) =>
    axios.get(
      `https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts?_embed=1&per_page=8&page=${page}`
    ),

  getPost: (id) => axios.get(`https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts/${id}`),

  getUsers: () => axios.get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/users"),
};

export default WordpressService;
