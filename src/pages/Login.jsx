import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://i.ibb.co/4fgmSSB/avatar-g1b3afb5f3-1920.png") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 30px;
    width: 25%;
    background: #ffffff;
    box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
    ${mobile({ width: "75%"})};
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    border: none;
    width: 40%;
    padding 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
