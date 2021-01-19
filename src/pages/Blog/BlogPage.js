import React, { useState, useEffect } from "react";
import WithLoading from "../../components/WithLoading";
import WordpressService from "../../utils/WordpressService";
import { Row, Col, Button } from "reactstrap";
import Slider from "react-slick";

const BlogPage = ({ setLoading }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    WordpressService.getPosts(1)
      .then((res) => setPosts(res.data))
      .then(() =>
        WordpressService.getCategories().then((res) =>
          setCategories(
            res.data.map((category) => ({
              id: category.id,
              name: category.name,
              slug: category.slug,
            }))
          )
        )
      )
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
      <Row className="blog-slider">
        <Col className="recommended-slider-column text-center mx-auto">
          <Slider {...settings}>
            {posts
              .filter((post) => post.acf.recommended)
              .map((post) => (
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div
                    className="d-flex flex-column justify-content-center align-items-start main-slider__item"
                    style={{
                      backgroundImage: `url("${post._embedded["wp:featuredmedia"][0].source_url})`,
                      backgroundSize: "cover",
                      height: "580px",
                      width: "100%",
                      color: "#f5f5f5",
                    }}
                  >
                    <h4>
                      <img
                        src={post._embedded.author[0].avatar_urls[48]}
                        alt={post._embedded.author[0].slug}
                      />
                      &nbsp;{post._embedded.author[0].name} /{" "}
                      {categories.filter((cat) => cat.id === post.categories[0]).map((cat) => cat.name)}
                    </h4>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <Button className="main-slider__item--button">Czytaj dalej</Button>
                  </div>
                </div>
              ))}
          </Slider>
        </Col>
      </Row>
      {posts.map((post) => {
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
