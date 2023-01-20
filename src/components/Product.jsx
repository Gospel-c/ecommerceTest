import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    z-index: 4;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    background-color: #f5fbfd;
    width: 370px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    

    &:hover ${Info} {
        opacity: 1;
    }
    
`;

const Circle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
  
`;
const Image = styled.img`
    height: 80%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;


export const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}
