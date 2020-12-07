import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 710px;
  width: 100%;

    a {
      margin-top: 120px;
      text-decoration: none;
      color: #3D3D4D;
      display: flex;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;  
      transition: transform 0.2s;

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

    }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  width: 433px;
  color: #3A3A3A;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;

  display: flex;
    input {
      padding: 20px;
      flex:1;
      width: 500px;
      height: 70px;
      border: 0;
      border-radius: 5px 0px 0px 5px;

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