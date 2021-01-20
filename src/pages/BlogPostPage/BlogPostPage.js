import React, { useState, useEffect } from "react";
import WithLoading from "../../components/WithLoading";
import WordpressService from "../../utils/WordpressService";
import { useParams } from "react-router-dom";
import "./BlogPostPage.scss";
import DateService from "../../utils/DateService";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import EAButton from "../../components/Common/EAButton/EAButton";

const BlogPostPage = ({ setLoading }) => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

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
    post &&
      WordpressService.getTags(post.tags.join()).then((res) => {
        setTags(
          res.data.map((tag) => ({
            id: tag.id,
            name: tag.name,
            slug: tag.slug,
          }))
        );
      });
  }, [setLoading, post, slug]);

  return (
    post && (
      <div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <div
            className="d-flex flex-column justify-content-center align-items-center post__header"
            style={{
              backgroundImage: `linear-gradient(180deg, #00000080 0%, #80808000 100%), url(https://ea-poland-wordpress.azurewebsites.net${post._embedded["wp:featuredmedia"][0].source_url})`,
              backgroundSize: "cover",
              height: "580px",
              width: "100%",
              color: "#f5f5f5",
            }}
          >
            <span className="d-flex align-items-center">
              <p className="recommended-post__author">
                {categories.filter((cat) => cat.id === post.categories[0]).map((cat) => cat.name)}
              </p>
            </span>
            <h1>{post.title.rendered}</h1>
            <p>
              {post._embedded.author[0].name} / {DateService.prepareDate(post.date)}
            </p>
          </div>
        </div>
        <div className="post">
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post ? post.content.rendered : "" }}
          ></div>
          <div>
            {tags.map((tag) => (
              //CREATE TAG BUTTON
              <EAButton title={tag.name} />
            ))}
          </div>
          <Row className="post__author">
            <Col xs={4}>
              <img
                className="author__img"
                src={`https://ea-poland-wordpress.azurewebsites.net${post._embedded.author[0].acf.photo}`}
                alt={post._embedded.author[0].slug}
              />
            </Col>
            <Col>
              <h3>Autor</h3>
              <h2>{post._embedded.author[0].name}</h2>
              <p>{post._embedded.author[0].description}</p>
              <div>LINKI</div>
            </Col>
          </Row>
        </div>
      </div>
    )
  );
};

export default WithLoading(BlogPostPage);
