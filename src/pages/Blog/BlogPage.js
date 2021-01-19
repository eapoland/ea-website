import React, { useState, useEffect } from "react";
import WithLoading from "../../components/WithLoading";
import WordpressService from "../../utils/WordpressService";
import { Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import "./BlogPage.scss";
import EAButton from "../../components/Common/EAButton/EAButton";

const BlogPage = ({ setLoading }) => {
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [posts, setPosts] = useState([]);
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
    WordpressService.getRecommendedPosts().then((res) => setRecommendedPosts(res.data));
    WordpressService.getPosts(1)
      .then((res) => setPosts(res.data))
      .then(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "d-flex align-items-center",
    dots: true,
    arrows: false,
  };
  return (
    <div>
      <Row className="recommended-slider">
        <Col className="recommended-slider-column text-center mx-auto">
          <Slider {...settings}>
            {recommendedPosts.map((post) => (
              <div className="d-flex flex-column justify-content-center align-items-start">
                <div
                  className="d-flex flex-column justify-content-center align-items-start recommended-slider__item"
                  style={{
                    backgroundImage: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.5452556022408963) 0%,
                        rgba(9, 9, 121, 0) 40%,
                        rgba(255, 255, 255, 0) 100%
                      ), url(https://ea-poland-wordpress.azurewebsites.net${post._embedded["wp:featuredmedia"][0].source_url})`,
                    backgroundSize: "cover",
                    height: "580px",
                    width: "100%",
                    color: "#f5f5f5",
                  }}
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="author__img"
                      src={post._embedded.author[0].avatar_urls[48]}
                      alt={post._embedded.author[0].slug}
                    />
                    <p className="recommended-post__author">
                      {post._embedded.author[0].name} /{" "}
                      {categories.filter((cat) => cat.id === post.categories[0]).map((cat) => cat.name)}
                    </p>
                  </span>
                  <h1>{post.title.rendered}</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <EAButton title="Czytaj dalej" size={150} target={`blog/${post.slug}`} />
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          {posts[0] && (
            <div
              style={{
                backgroundImage: `url(https://ea-poland-wordpress.azurewebsites.net${posts[0]._embedded["wp:featuredmedia"][0].source_url})`,
                backgroundSize: "cover",
                height: "470px",
                width: "764px",
                color: "#f5f5f5",
              }}
            >
              <h1 key={posts[0].id}>{posts[0].title.rendered}</h1>
            </div>
          )}
        </Col>
        <Col xs={4}>TEST</Col>
      </Row>
      <Row className="blog-posts justify-content-between">
        {posts.slice(1).map((post) => {
          return (
            <div>
              <img
                src={`https://ea-poland-wordpress.azurewebsites.net${post._embedded["wp:featuredmedia"][0].source_url}`}
                alt={post._embedded.author[0].slug}
                style={{
                  height: "220px",
                  width: "362px",
                  borderRadius: "10px",
                }}
              />
              <h1 key={post.id}>{post.title.rendered}</h1>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default WithLoading(BlogPage);
