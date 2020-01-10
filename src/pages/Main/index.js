import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Main() {
  return (
    <ProductList>
      <li>
        <img src="" alt="" />
      </li>
      <strong>Descrição</strong>
      <span>Preço</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />3
          <span>ADICIONAR AO CARRINHO</span>
        </div>
      </button>
    </ProductList>
  );
}
