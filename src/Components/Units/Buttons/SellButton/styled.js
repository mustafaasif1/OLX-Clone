import styled from 'styled-components';

export const SellButtonDiv = styled.div`
  margin-left: 10px;

  button {
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    pointer-events: auto;
    position: relative;
    cursor: pointer;
    text-align: center;

    #sell {
      height: 100%;
      width: 100%;
      filter: drop-shadow(2px 2px 2px rgb(185, 185, 185));
    }

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;

      #iconPlusSell {
        margin-right: 6px;
      }
    }
  }
`;
