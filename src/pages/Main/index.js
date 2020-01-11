import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      price: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;
    console.log(products);

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
