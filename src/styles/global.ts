import { createGlobalStyle } from 'styled-components';
import github from '../assets/github.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  #root{
    padding: 40px 20px;
    max-width: 960px;
    margin: 0 auto;
  }

  body {
    background:#E5E5E5 url(${github})no-repeat 70% top ;

  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #3D3D4D;
  }


`;