import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLoading from "../../components/WithLoading";

const BlogPage = ({ setLoading }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts")
      .then((res) => setPosts(res.data))
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title.rendered}</h1>
      ))}
    </div>
  );
};

export default WithLoading(BlogPage);
