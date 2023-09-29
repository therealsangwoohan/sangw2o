import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import blogPosts from "../blog_posts.json";

function Blog() {
  return (
    <Container className='mt-5'>
      {blogPosts.map(function(post, index) {
        return (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle>{post.subtitle}</Card.Subtitle>
              <Card.Body>{post.body}</Card.Body>
            </Card.Body>
          </Card>
        )
      })}
    </Container>
  )
}

export default Blog;