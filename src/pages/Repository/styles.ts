import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 80px;

    a{
      display: flex;
      align-items: center;
      text-decoration: none;
      font-weight: bold;
      color: #A8A8B3;

      svg {
        margin-right: 12px;
      }
    }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  
    header {
      display: flex;
      align-items: center;
        img {
          width: 163px;
          height: 163px;
          border-radius: 50%;
          padding: 14px;
        }

        div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 12px;

          strong {
            font-weight: 700;
            font-size: 36px;
            line-height: 42px;
            color: #3D3D4D;
          }

          p{
            font-size: 20px;
            color: #A8A8B3;
          }
      }
    }

    ul{
      margin-top: 16px;
      display: flex;
      list-style: none;

        li {
          display: flex;
          flex-direction: column;

          & + li {
            margin-left: 80px;
          }
            strong {
              font-size: 36px;
              color: #3D3D4D;
            }
            span{
              font-size: 20px;
              color: #6C6C80;
            }
        }

    }
`;

export const Issues = styled.div`
    a {
      width: 100%;
      margin-top: 120px;
      text-decoration: none;
      color: #3D3D4D;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 5px;  
      transition: transform 0.2s;
      height: 110px;
      padding: 24px;

      &:hover {
        transform: translateX(10px);
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