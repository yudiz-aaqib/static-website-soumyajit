import React from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
                Hi There!{" "}
=======
                Hi There!!!!!!!!!!!!!!!!!!!!{" "}
>>>>>>> parent of 422e173 (testing-4)
=======
                Hi There!!!!!!!!!!!!!!!!!!!!{" "}
=======
                Hi There!{" "}
>>>>>>> parent of 200ad91 (pipeline testing)
>>>>>>> parent of 3fc5abd (pipeline testing)
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
<<<<<<< HEAD
<<<<<<< HEAD
                <strong className="main-name"> YUDIZ</strong>
=======
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
>>>>>>> parent of f541e2d (name changes)
=======
                <strong className="main-name"> Aaqib</strong>
>>>>>>> parent of 3fc5abd (pipeline testing)
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
