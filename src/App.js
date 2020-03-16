import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ClientList from "./ClientList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let clientInfo = { title: "Client List" };
  let categoryInfo = { title: "Category List" };

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            {" "}
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            {" "}
            <ClientList info={clientInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
