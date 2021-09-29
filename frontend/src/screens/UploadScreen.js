import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const UploadScreen = () => {
  return (
    <Row>
      <Col>
        <h4>Page not found...</h4>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
      </Col>
    </Row>
  );
};

export default UploadScreen;
