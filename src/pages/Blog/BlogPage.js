import React, { useState, useEffect } from "react";
import axios from "axios";
import WithLoading from "../../components/WithLoading";

const BlogPage = ({ setLoading }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts")
      .then((res) => setPosts(res.data))
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        console.log(post);
        return (
          <>
            <h1 key={post.id}>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </>
        );
      })}
    </div>
  );
};

export default WithLoading(BlogPage);
