import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navi from './Navi';
import ProductList from './ProductList';
import CatagoryList from './CatagoryList';

export default class App extends Component {
  state = {currentCatagorry: "", products: []}

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url +="?categoryId="+categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  changeCatagory = (catagory) => {
    this.setState({ currentCatagorry: catagory.catagoryName });
    console.log(catagory.id);
    this.getProducts(catagory.id);
  }

  render() {
    let Catagoryinfo = { title: "BUM List" };
    let Productinfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CatagoryList changeCatagory={this.changeCatagory} currentCatagorry={this.state.currentCatagorry} info={Catagoryinfo} />
            </Col>
            <Col xs="9">
              <ProductList info={Productinfo} currentCatagorry={this.state.currentCatagorry} products={this.state.products} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}