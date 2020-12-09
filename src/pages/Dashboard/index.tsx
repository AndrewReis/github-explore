import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import {Container, Title, Form, Error } from './styles';

interface Repositories {
  full_name: string;
  description: string;
  owner: {
    login: string,
    avatar_url: string,
  }
}

const Dashboard: React.FC = () => {

  const [ repositories, setRepositories ] = useState<Repositories[]>([])
  const [ newRepo, setnewRepo ] = useState('');
  const [ erroMessage, setErroMessage ] = useState('');

  async function handleAddNewRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();


    if(!newRepo){
      setErroMessage('Não foi possivel encontrar o repositório, tente autor/repo');
      return;
    }
    
    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setnewRepo('');
      setErroMessage('');
    } catch (error) {
      return setErroMessage('Repositório não encontrado.')
    }
  }
  return (
    <Container>
      <img src={logo} alt="logo github-explore"/>
      <Title> Explore repositórios no Github. </Title>

      <Form hasError={!!erroMessage} onSubmit={handleAddNewRepository} >
        <input
          value={newRepo}
          onChange={e => setnewRepo(e.target.value)}
          placeholder="Pesquise repositorios"
        />
        <button type="submit" >Pesquisar</button>
      </Form>
      { erroMessage && <Error> {erroMessage} </Error> }

        {
          repositories.map(repository => {
            return (
              <Link to="/repository" key={repository.full_name} >
                <img src={repository.owner.avatar_url} alt={repository.owner.avatar_url} />
                <div>
                  <strong> {repository.full_name} </strong>
                  <p> {repository.description} </p>
                </div>
                <FiChevronRight size={20} color="#C9C9D4"/>
              </Link>
            );
          })
        }

    </Container>
  );
}

export default Dashboard;