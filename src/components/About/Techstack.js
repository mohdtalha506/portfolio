import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";

import { TbBrandRedux } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
     
    </Row>
  );
}

export default Techstack;
