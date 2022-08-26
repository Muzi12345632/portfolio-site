import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Artificial_Intelligence"
              description="Implementation of Reinforcement Learning Algorithms. Python, OpenAI Gym, Tensorflow.."
              ghLink="https://github.com/Muzi12345632/Reinforcement_Learning_AI"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="QR-Code scanner"
              description="QRcode scanner for covid-19 vaccination cards."
              ghLink="https://github.com/Muzi12345632/QR_code"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Whatsapp Bot"
              description="Whatsapp bot that replies messages automatically"
              ghLink="https://github.com/Muzi12345632/whatsappbot"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Traffic Sign Detection using Computer Vision"
              description="Used the Germany traffic sign dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 42 classes of various traffic signs."
              ghLink="https://github.com/Muzi12345632/TSR-Deploy"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI for Intent recognition"
              description="Using 'Natural Launguage Processing' i developed chatbot for Intent Recognition."
              ghLink="https://github.com/Muzi12345632/NLP_Intent_recognition_AI"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Twitter bot TWEEPY"
              description="Twitter bot that uses tweepy library class to connect to TWITTER API"
              ghLink="https://github.com/Muzi12345632/TWITTER-BOT-tweepy-"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
