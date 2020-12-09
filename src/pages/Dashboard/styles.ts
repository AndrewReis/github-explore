import styled, { css } from 'styled-components';
import { shade } from 'polished';


interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  max-width: 714px;
  width: 90%;

    a {
      width: 100%;
      height: 112px;
      margin-top: 120px;
      text-decoration: none;
      color: #3D3D4D;
      display: flex;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;  
      transition: transform 0.2s;

      position: relative;

      &:hover {
        transform: translateX(10px);
      }


      & + a {
        margin-top: 16px;
      }

        img {
          width: 83px;
          height: 83px;
          border-radius: 50%;
          padding: 14px;
        }

        div {
          display: flex;
          flex-direction: column;

            strong {
              font-weight: 700;
              line-height: 28px;
              font-size: 24px;
            }

            p{
              font-size: 18px;
              line-height: 21px;
              color: #A8A8B3;
            }
        }
      
      svg {
        position: absolute;
        right: 10px;
      }
    }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  width: 433px;
  color: #3A3A3A;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;

  display: flex;
    input {
      padding: 20px;
      flex:1;
      width: 500px;
      height: 70px;
      border: 2px solid #fff;
      border-right: 0;
      border-radius: 5px 0px 0px 5px;
      outline: 0;

      ${
        props => props.hasError && css`
          border-color: #c52040;
        `
      }

      &::placeholder{
        color: #A8A8B3;
      }
    }
    button {
      width: 210px;
      height: 70px;
      background-color: #04D361;
      border: 0;
      font-size: 18px;
      color: #fff;
      font-weight: bold;
      border-radius: 0px 5px 5px 0px;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background-color: ${shade(0.2,'#04D361' )};
      }
    }

`;

export const Error = styled.span`
  font-size: 16px;
  color: #c52040;
`;