import React, { useState, useEffect } from "react";
import WithLoading from "../../components/WithLoading";
import WordpressService from "../../utils/WordpressService";
import { useParams } from "react-router-dom";

const BlogPostPage = ({ setLoading }) => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    WordpressService.getCategories().then((res) =>
      setCategories(
        res.data.map((category) => ({
          id: category.id,
          name: category.name,
          slug: category.slug,
        }))
      )
    );
    WordpressService.getPost(slug)
      .then((res) => setPost(res.data[0]))
      .then(() => {
        setLoading(false);
      });
  }, [setLoading]);

  return <div dangerouslySetInnerHTML={{ __html: post ? post.content.rendered : "" }}></div>;
};

export default WithLoading(BlogPostPage);
