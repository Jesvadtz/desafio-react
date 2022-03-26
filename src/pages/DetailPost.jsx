import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FooterDetailPost from "../components/FooterDetailPost/FooterDetalPost";
import AsideLeftDetailPost from "../components/AsideLeftDetailPost/AsideLeftDetailPost";
import Navbar from "../components/Navbar/Navbar";
import AsideRightDetailPost from "../components/AsideRightDetailPost/AsideRightDetailPost";
import CardDetailPost from "../components/CardDetailPost/CardDetailPost";
import SectionExtraDetailPost from "../components/SectionExtraDetailPost/SectionExtraDetailPost";

function DetailPost(props) {
  const params = useParams();

  const [dataPost, setDataPost] = React.useState({});
  const { title, content, tags, writer, createdAt } = dataPost;

  React.useEffect(() => {
    async function getPost() {
      const post = await fetch(`http://localhost:8080/posts/${params.idPost}`, {
        method: "GET",
        headers: {
          Authorization: "",
        },
      }).then((res) => res.json());
      setDataPost(post.data.post);
    }
    getPost();
  }, [params.idPost]);

  const date = new Date(createdAt);
  let datePost = date.toLocaleString();

  return (
    <section>
      <Navbar />
      <Container style={{ marginTop: "64px", paddingTop: "1rem" }}>
        <Row>
          <Col md={1}>
            <AsideLeftDetailPost />
          </Col>
          <Col md={11} lg={8}>
            <CardDetailPost
              title={title}
              content={content}
              tags={tags}
              userName={writer}
              date={datePost}
              tag={tags}
            />
            <SectionExtraDetailPost />
          </Col>
          <Col lg={3}>
            <AsideRightDetailPost userName={writer} />
          </Col>
        </Row>
      </Container>
      <FooterDetailPost />
    </section>
  );
}

export default DetailPost;
