import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardPost from "../components/CardPost/CardPost";
import { Container, Row, Col } from "react-bootstrap";

function Home(props) {
  const [posts, setPost] = React.useState([]);

  React.useEffect(() => {
    async function getAllPost() {
      const posts = await fetch("http://localhost:8080/posts").then((res) =>
        res.json()
      );
      setPost(posts.data.posts);
    }
    getAllPost();
  }, []);

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "64px", paddingTop: "1rem" }}>
        <Row>
          <Col md={3}>Robert</Col>
          <Col xs={12} md={9} lg={6} className="pe-0 ps-0 rounded-0">
            {posts.map((post) => {
              const date = new Date(post.createdAt);
              let datePost = date.toLocaleString();

              return (
                <CardPost
                  title={post.title}
                  key={post._id}
                  userName={post.writer}
                  date={datePost}
                  tag={post.tags}
                />
              );
            })}
          </Col>
          <Col>Rubs</Col>
        </Row>
      </Container>
      {/* <Header>
      </Header>
      <Main>
        <AsideLeft />
        <SectionPost />
        <AdsideRight />
      </Main>
      <Footer /> */}
    </>
  );
}

export default Home;
