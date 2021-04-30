import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './BlogPostPage.scss'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'
import WithLoading from '../../components/WithLoading'
import TagButton from '../../components/Common/TagButton/TagButton'
import DateService from '../../utils/DateService'
import WordpressService from '../../utils/WordpressService'
import ScrollToTop from '../../components/ScrollToTop'

const BlogPostPage = ({ setLoading }) => {
  const { slug } = useParams()

  const [post, setPost] = useState(null)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [recommendedPosts, setRecommendedPosts] = useState([])

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
        WordpressService.getPost(slug).then(res => setPost(res.data[0]))
      })
      .then(() => {
        if (post) {
          WordpressService.getTags(post.tags.join()).then(res => {
            setTags(
              res.data.map(tag => ({
                id: tag.id,
                name: tag.name,
                slug: tag.slug,
              }))
            )
          })
        }
      })
      .then(() => {
        WordpressService.getRecommendedPosts().then(res =>
          setRecommendedPosts(res.data)
        )
      })
      .then(() => {
        setLoading(false)
      })
  }, [setLoading, post, slug])

  return (
    post && (
      <div>
        <ScrollToTop />
        <div className="d-flex flex-column justify-content-center align-items-start">
          <div
            className="d-flex flex-column justify-content-center align-items-center post__header"
            style={{
              backgroundImage: `linear-gradient(180deg, #00000080 0%, #80808000 100%), url(https://ea-poland-wordpress.azurewebsites.net${post._embedded['wp:featuredmedia'][0].source_url})`,
              backgroundSize: 'cover',
              height: '580px',
              width: '100%',
              color: '#f5f5f5',
            }}
          >
            <span className="d-flex align-items-center">
              <p className="recommended-post__author">
                {categories
                  .filter(cat => cat.id === post.categories[0])
                  .map(cat => cat.name)}
              </p>
            </span>
            <h1>{post.title.rendered}</h1>
            <p>
              {post._embedded.author[0].name} /{' '}
              {DateService.prepareDate(post.date)}
            </p>
          </div>
        </div>
        <div className="post">
          <div
            className="post__content"
            dangerouslySetInnerHTML={{
              __html: post ? post.content.rendered : '',
            }}
          />
          <div className="post__tags d-flex justify-content-between align-items-center">
            <div>
              {tags.map(tag => (
                // CREATE TAG BUTTON
                <TagButton title={tag.name} slug={tag.slug} />
              ))}
            </div>
            <div>
              <FacebookShareButton url={window.location.href}>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="social-icon"
                />
              </FacebookShareButton>
              <TwitterShareButton url={window.location.href}>
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </TwitterShareButton>
              <LinkedinShareButton url={window.location.href}>
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </LinkedinShareButton>
            </div>
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
              <div>
                <a
                  href={post._embedded.author[0].acf.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="social-icon"
                  />
                </a>
                <a
                  href={`mailto:${post._embedded.author[0].acf.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="post__recommended">
          <Col>
            <h2>Polecamy</h2>
            <Row className="post__recommended--list justify-content-between">
              {recommendedPosts.map(blogPost => (
                <NavHashLink
                  to={`${blogPost.slug}`}
                  style={{ textDecoration: 'none' }}
                  key={blogPost.id}
                >
                  <div>
                    <img
                      src={`https://ea-poland-wordpress.azurewebsites.net${post._embedded['wp:featuredmedia'][0].source_url}`}
                      alt={post._embedded.author[0].slug}
                      style={{
                        height: '220px',
                        width: '362px',
                        borderRadius: '10px',
                      }}
                    />
                    <h4>
                      {categories
                        .filter(cat => cat.id === post.categories[0])
                        .map(cat => cat.name)}
                    </h4>
                    <h3>{post.title.rendered}</h3>
                  </div>
                </NavHashLink>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    )
  )
}

export default WithLoading(BlogPostPage)
