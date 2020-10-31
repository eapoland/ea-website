import React, { useState, useEffect } from "react";
import WithLoading from "../../components/WithLoading";
import WordpressService from "../../utils/WordpressService";

const BlogPage = ({ setLoading }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    WordpressService.getPosts()
      .then((res) => setPosts(res.data))
      .then(() => {
        setLoading(false);
      });
  }, [setLoading]);

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
