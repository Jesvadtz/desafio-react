import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import jwt from "jwt-decode";

import FooterDetailPost from "../components/FooterDetailPost/FooterDetalPost";
import AsideLeftDetailPost from "../components/AsideLeftDetailPost/AsideLeftDetailPost";
import Navbar from "../components/Navbar/Navbar";
import AsideRightDetailPost from "../components/AsideRightDetailPost/AsideRightDetailPost";
import CardDetailPost from "../components/CardDetailPost/CardDetailPost";
import SectionExtraDetailPost from "../components/SectionExtraDetailPost/SectionExtraDetailPost";
import FooterFixDetailPost from "../components/FooterFixDetailPost/FooterFixDetailPost";

function DetailPost() {
  const params = useParams();

  const [dataPost, setDataPost] = React.useState({});
  const [heart, setHeart] = React.useState(0);
  const [unicorn, setUnicorn] = React.useState(0);
  const [saved, setSaved] = React.useState(0);

  const authorization = localStorage.getItem("token");
  const data = jwt(authorization);
  const userId = data?.id;
  console.log(userId);

  const { image, title, content, tags, writer, createdAt } = dataPost;
  const writerName = `${writer?.name} ${writer?.lastName}`;

  React.useEffect(() => {
    async function getPost() {
      const post = await fetch(`http://localhost:8080/posts/${params.idPost}`, {
        method: "GET",
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setDataPost(post.data.post);
    }
    getPost();
  }, [params.idPost]);

  const date = new Date(createdAt);
  let datePost = date.toLocaleString();
  const editable = userId === writer?._id;
  console.log(writer?._id);

  return (
    <section>
      <Navbar editable={editable} />
      <Container style={{ marginTop: "64px", paddingTop: "1rem" }}>
        <Row>
          <Col md={1}>
            <AsideLeftDetailPost
              heart={heart}
              setHeart={setHeart}
              unicorn={unicorn}
              setUnicorn={setUnicorn}
              saved={saved}
              setSaved={setSaved}
            />
          </Col>
          <Col md={11} lg={8}>
            <CardDetailPost
              editable={editable}
              image={image}
              title={title}
              content={content}
              tags={tags}
              userName={writerName}
              date={datePost}
              tag={tags}
              idPost={params.idPost}
            />
            <SectionExtraDetailPost />
          </Col>
          <Col lg={3}>
            <AsideRightDetailPost userName={writerName} />
          </Col>
        </Row>
      </Container>
      <footer>
        <FooterDetailPost />
        <FooterFixDetailPost
          heart={heart}
          setHeart={setHeart}
          unicorn={unicorn}
          setUnicorn={setUnicorn}
          saved={saved}
          setSaved={setSaved}
        />
      </footer>
    </section>
  );
}

export default DetailPost;
