import React, { Component } from "react";
import axios from "axios";

export default class BlogPage extends Component {
  state = {
    blogPosts: [],
  };

  componentDidMount() {
    axios
      .get("http://ea-poland-wordpress.azurewebsites.net/wp-json/wp/v2/posts")
      .then((res) =>
        this.setState({
          blogPosts: res.data,
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.blogPosts.map((post) => (
          <h1 key={post.id}>{post.title.rendered}</h1>
        ))}
      </div>
    );
  }
}
