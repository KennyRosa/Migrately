import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureBulletList from "./FeatureBulletList";
import "./landing.css";

function Checklist() {
  const features = [
    {
      id: 1,
      title: "Live Immigration Specialist",
    },
    {
      id: 2,
      title: "Secure Storage Cloud",
    },
    {
      id: 3,
      title: "Guided Visa Journey",
    },
    {
      id: 4,
      title: "Notification on Visa Policy",
    },
  ];

  const mappingChecklist = (item, index) => {
    return (
      <Col className="landing-icon-spacing" key={index} lg={3} md={6} sm={12}>
        <FeatureBulletList item={item} />
      </Col>
    );
  };

  return (
    <div className="checklist-landing main-landing">
      <Container>
        <Row>{features.map(mappingChecklist)}</Row>
      </Container>
    </div>
  );
}

export default Checklist;
