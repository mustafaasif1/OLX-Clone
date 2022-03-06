import styled from 'styled-components';

export const BackToTopButtonContainer = styled.button`
  display: ${(props) => (props.visible ? 'inline' : 'none')};
  position: fixed;
  top: 130px;
  right: 44%;
  z-index: 99;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.274);
  font-weight: bold;

  :hover {
    background-color: rgb(230, 230, 230);
  }

  @media (max-width: 992px) {
    top: auto;
    display: ${(props) => (props.visible ? 'inline-block;' : 'none')};
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: white;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.274);
    font-weight: bold;
  }
`;
