import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import CardPost from "../components/CardPost/CardPost";
import CardAsideR from "../components/CardAsideR/CardAsideR";
import CardAsideRT from "../components/CardAsideRT/CardAsideRT";
import CardAsideARS from "../components/CardAsideRS/CardAsideARS";
import LeftSide from "../components/LeftSide/Left";
import CardARH from "../components/CardARH/CardARH";
import CardARHD from "../components/CardARHD/CardARHD";
import CardARHE from "../components/CardARHE/CardARHE";
import CardARHC from "../components/CardARHC/CardARHC";
import CardARHM from "../components/CardARHM/CardARHM";
import CardARHW from "../components/CardARHW/CardARHW";

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
          <Col md={3}>
            <LeftSide />
          </Col>
          <Col xs={12} md={9} lg={6} className="pe-0 ps-0 rounded-0">
            {posts.map((post) => {
              const date = new Date(post.createdAt);
              let datePost = date.toLocaleString();

              return (
                <Link to={`/posts/${post._id}`} key={post._id}>
                  <CardPost
                    title={post.title}
                    key={post._id}
                    userName={post.writer}
                    date={datePost}
                    tag={post.tags}
                  />
                </Link>
              );
            })}
          </Col>
          <Col>
            <CardAsideRT></CardAsideRT>
            <CardAsideR></CardAsideR>
            <CardAsideARS></CardAsideARS>
            <CardARH></CardARH>
            <CardARHD></CardARHD>
            <CardARHE></CardARHE>
            <CardARHC></CardARHC>
            <CardARHM></CardARHM>
            <CardARHW></CardARHW>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
