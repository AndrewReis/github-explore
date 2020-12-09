import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Container, Header, RepositoryInfo, Issues} from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo github-explore"/>
        <Link to="/">
          <FiChevronLeft size={20} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/60078687?s=460&u=9895b24de5fff4516dc2395639817ae49e893056&v=4" alt="Andrew Reis"/>
          <div>
            <strong>GitHub-Explore</strong>
            <p>descrição do projeto.</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>4</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="">
          <div>
            <strong>GitHub-Explore</strong>
            <p>descrição do projeto.</p>
          </div>
          <FiChevronRight size={20} color="#C9C9D4"/>
        </Link>
      </Issues>
    </Container>
  );
}

export default Repository;