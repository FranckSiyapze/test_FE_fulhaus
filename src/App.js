import logo from "./logo.svg";
import banner from "./img/banner.jpg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import Loader from "react-loading-indicators";
function App() {
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    axios
      .get(
        "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
      )
      .then((response) => {
        //setProduct(response.data);
        
        const products = response.data.data.products;
          setProduct(products);
        console.log(response.data.data.products);
      })
      .catch((error) => {
        setError(error);
      });
  };
  if (error) return `Error: ${error.message}`;
  if (!product) return null;
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
  /* return (
    <Container>
      <Row>
        <Col sm={5} style={{ color: "red" }}>
          <img src={banner} className="imgSize" alt="banner" />
        </Col>
        <Col sm={7}>
          <div className="grid">
            <div className="item">item 1</div>
            <div className="item">item 2</div>
            <div className="item">item 3</div>
            <div className="item">item 3</div>
            <div className="item">item 3</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  ); */
  
  if (product.length > 0)
    return (
      <div className="container">
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-lg-4">
            <img src={banner} className="imgSize img-fluid" alt="banner" />
          </div>
          <div className="col-md-8 col-sm-6  col-lg-8">
            <div className="row pt-4">
              {product.map((item, i) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 mb-2 size"
                    key={item._id}
                  >
                    <div className="card h-100">
                      <a href="#">
                        <img
                          className="card-img-top"
                          src={item.imageURLs[0]}
                          alt=""
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <p className="size mb-0">{item.fulhausProductName}</p>
                          <div className="row mx-1">
                            <div className="col flex p-1">
                              <Icon.StarFill color="gold" size={20} />
                            </div>
                            <div className="col flex p-1">
                              <Icon.StarFill color="gold" size={20} />
                            </div>
                            <div className="col flex p-1">
                              <Icon.StarFill color="gold" size={20} />
                            </div>
                            <div className="col flex p-1">
                              <Icon.StarFill color="gold" size={20} />
                            </div>
                            <div className="col flex p-1">
                              <Icon.StarFill color="gold" size={20} />
                            </div>
                          </div>
                        </h4>
                        <div className="row">
                          <div className="col-6">$39.0</div>
                          <div className="col-6">
                            <Icon.Basket color="red"  size={20} />
                          </div>
                        </div>
                        <p className="card-text">
                          
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
