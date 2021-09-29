import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Categories = ({ giphy }) => {
  return (
    <Card>
      <ListGroup.Item>
        <h4># Heeey there</h4>
        {giphy.categories}
      </ListGroup.Item>
    </Card>
  );
};

export default Categories;
