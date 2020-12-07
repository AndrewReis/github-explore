import React from 'react';

import { FiArrowRightCircle } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Container, Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo github-explore"/>
      <Title> Explore repositórios no Github. </Title>
      <Form>
        <input placeholder="Pesquise repositorios"/>
        <button type="submit" >Pesquisar</button>
      </Form>

      <a href="#">
        <img src="https://avatars0.githubusercontent.com/u/60078687?s=460&u=9895b24de5fff4516dc2395639817ae49e893056&v=4" alt="Andrew Reis"/>
        <div>
          <strong>GitHub-Explore</strong>
          <p>descrição do projeto.</p>
        </div>
        <FiArrowRightCircle size={20} color="#C9C9D4"/>
      </a>
    </Container>
  );
}

export default Dashboard;