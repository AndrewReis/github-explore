import React from 'react';

import { FiArrowLeft, FiArrowRightCircle } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Container, Info} from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo github-explore"/>

      <div>
        <img src="https://avatars0.githubusercontent.com/u/60078687?s=460&u=9895b24de5fff4516dc2395639817ae49e893056&v=4" alt="Andrew Reis"/>
        <div>
          <strong>GitHub-Explore</strong>
          <p>descrição do projeto.</p>
        </div>
      </div>

      <Info>
        <div>
          <strong>1808</strong>
          <p>Stars</p>
        </div>
        <div>
          <strong>48</strong>
          <p>Forks</p>
        </div>
        <div>
          <strong>67</strong>
          <p>Issues abertas</p>
        </div>
      </Info>

      <a href="#">
        <div>
          <strong>GitHub-Explore</strong>
          <p>descrição do projeto.</p>
        </div>
        <FiArrowRightCircle size={20} color="#C9C9D4"/>
      </a>
      

      <a href="#">
        <div>
          <strong>GitHub-Explore</strong>
          <p>descrição do projeto.</p>
        </div>
        <FiArrowRightCircle size={20} color="#C9C9D4"/>
      </a>

    </Container>
  );
}

export default Repository;