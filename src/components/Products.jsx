import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';


const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Products = () => {
  return (
    <Container>
        { popularProducts.map(item => (
            <Product item = {item} key = {item.id} />
        )) }
    </Container>
  )
}
