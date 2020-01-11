import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

class Main extends Component {
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

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
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

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Main);
