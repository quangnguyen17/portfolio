import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import "./App.css";

const SERVER_URL = "https://quangnguyen-server.herokuapp.com/api";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/resume?projects`)
      .then(({ data }) => setProjects(data.results))
      .catch(console.error);
  }, []);

  const Header = () => {
    return (
      <>
        <h1>Quang Nguyen</h1>
        <p>I'm a:</p>
      </>
    );
  };

  return (
    <div className="App">
      <Header />
      <div class="scrolling-wrapper-flexbox py-3">
        {projects.map((project, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
