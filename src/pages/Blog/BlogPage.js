import React, { useState, useEffect } from "react"
import WithLoading from "../../components/WithLoading"
import WordpressService from "../../utils/WordpressService"
import { Row, Col } from "reactstrap"
import Slider from "react-slick"
import "./BlogPage.scss"
import EAButton from "../../components/Common/EAButton/EAButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons"
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap"
import { NavHashLink } from "react-router-hash-link"

const BlogPage = ({ setLoading }) => {
  const [recommendedPosts, setRecommendedPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    WordpressService.getCategories()
      .then(res =>
        setCategories(
          res.data.map(category => ({
            id: category.id,
            name: category.name,
            slug: category.slug,
          }))
        )
      )
      .then(() => {
        WordpressService.getRecommendedPosts().then(res =>
          setRecommendedPosts(res.data)
        )
      })
      .then(() => {
        WordpressService.getPosts(1)
          .then(res => setPosts(res.data))
          .then(() => {
            setLoading(false)
          })
      })
  }, [setLoading])

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
  }
  return (
    <div>
      <Row className="recommended-slider">
        <Col className="recommended-slider-column text-center mx-auto">
          <Slider {...settings}>
            {recommendedPosts.map(post => (
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
                      src={`https://ea-poland-wordpress.azurewebsites.net${post._embedded.author[0].acf.photo}`}
                      alt={post._embedded.author[0].slug}
                    />
                    <p className="recommended-post__author">
                      {post._embedded.author[0].name} /{" "}
                      {categories
                        .filter(cat => cat.id === post.categories[0])
                        .map(cat => cat.name)}
                    </p>
                  </span>
                  <h1>{post.title.rendered}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <EAButton
                    title="Czytaj dalej"
                    size={150}
                    target={`blog/${post.slug}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      <Row className="blog-post__first">
        <Col xs={8}>
          {posts[0] && (
            <NavHashLink
              to={`blog/${posts[0].slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundImage: `url(https://ea-poland-wordpress.azurewebsites.net${posts[0]._embedded["wp:featuredmedia"][0].source_url})`,
                }}
                className="d-flex flex-column justify-content-end first-post"
                key={posts[0].id}
              >
                <h3 style={{ color: "white" }}>
                  {categories
                    .filter(cat => cat.id === posts[0].categories[0])
                    .map(cat => cat.name)}
                </h3>
                <h1>{posts[0].title.rendered}</h1>
              </div>
            </NavHashLink>
          )}
        </Col>
        <Col xs={4}>
          <InputGroup>
            <Input
              className="shadow-none"
              placeholder="Wpisz wyszukiwaną frazę"
            />
            <InputGroupAddon addonType="append">
              <InputGroupText className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <div>
            <h3>ZAGADNIENIA</h3>
            {categories.map(category => (
              <button className="blog-post__first--btn" key={category.slug}>
                <div className="d-flex justify-content-between align-items-center">
                  <p>{category.name}</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ marginTop: "-20px" }}
                  />
                </div>{" "}
              </button>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="blog-posts justify-content-between">
        {posts.slice(1).map(post => {
          return (
            <NavHashLink
              to={`blog/${post.slug}`}
              style={{ textDecoration: "none" }}
              key={post.id}
            >
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
                <h3>
                  {categories
                    .filter(cat => cat.id === post.categories[0])
                    .map(cat => cat.name)}
                </h3>
                <h2>{post.title.rendered}</h2>
              </div>
            </NavHashLink>
          )
        })}
      </Row>
    </div>
  )
}

export default WithLoading(BlogPage)
