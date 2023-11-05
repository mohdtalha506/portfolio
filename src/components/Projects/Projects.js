import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import connectnow from "../../Assets/Projects/connectnow.png";
import chatapp from "../../Assets/Projects/Chat App.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectnow}
              isBlog={false}
              title="Video Group Meeting"
              description="A Chat Room or Workspace to share resources and hangout with friends build with react.js and socket.io. Have features which allows user for realtime messaging and screen sharing."
              ghLink="https://github.com/mohdtalha506/connectnow.git"
              demoLink="https://connectnoww.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App"
              description="Personal Chat Room hangout with friends build with react.js and socket.io. Have features which allows user for realtime messaging."
              ghLink="https://github.com/mohdtalha506/Multi-User-Chat-App.git"
              demoLink="https://connectnoww.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
