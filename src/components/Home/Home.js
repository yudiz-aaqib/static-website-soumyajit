kimport React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!!!!!!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                I am
                <strong className="main-name"> Aaqib</strong>
=======
                I'M
<<<<<<< HEAD
<<<<<<< HEAD
                <strong className="main-name"> YUDIZZZZZZZZZZZZZZZZZZZZZZZZZZ</strong>
=======
                <strong className="main-name"> SOUMYAJIT</strong>
>>>>>>> parent of 9df4b4c (fresh-add-yudiz)
=======
                <strong className="main-name"> SOUMYAJIT</strong>
>>>>>>> parent of 9df4b4c (fresh-add-yudiz)
>>>>>>> parent of ddb695f (working)
=======
                I'M
<<<<<<< HEAD
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
<<<<<<< HEAD
=======
                <strong className="main-name"> Aaqib</strong>
>>>>>>> parent of 389b0d7 (I'M to I am)
=======
>>>>>>> parent of 39016dd (aaqib name add)
=======
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
>>>>>>> parent of 39016dd (aaqib name add)
>>>>>>> parent of 240f510 (working fine)
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
