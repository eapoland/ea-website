import axios from "axios";

const WordpressService = {
  getPosts: (page) =>
    axios.get(
      `https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts?_embed=1&per_page=7&page=${page}`
    ),

  getRecommendedPosts: () =>
    axios.get(
      `https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts?_embed=1&per_page=3&page=1&sticky=1`
    ),

  getPost: (slug) =>
    axios.get(`https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts?slug=${slug}`),

  getUsers: () => axios.get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/users"),

  getCategories: () => axios.get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/categories"),
};

export default WordpressService;
