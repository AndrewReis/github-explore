import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;

 > img{
    margin-bottom: 80px;
  }

    div{
      max-height: 150px;
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

      & + a {
        margin-top: 16px;
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

export const Info = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  max-width: 416px;
  width: 90%;
`;