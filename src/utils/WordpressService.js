import axios from "axios";

const WordpressService = {
  getPosts: () => axios.get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts"),

  getPost: (id) => axios.get(`https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts/${id}`),

  getUsers: () => axios.get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/users"),
};

export default WordpressService;
