import styled from 'styled-components';

export const EnterEmailContainer = styled.div`
  text-align: center;

  #logo {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 5px;
    color: grey;
    font-size: 12px;
  }
`;

export const LoginButton = styled.button`
  border: none;
  background-color: #002f34;
  color: white;
  margin: 10px 0 20px 0;
  width: 100%;
  padding: 10px;
`;

export const BackContainer = styled.button`
  border: none;
  background-color: white;
  padding: 0;

  #back {
    color: grey;
    width: 32px;
    height: 32px;
  }
`;

export const MakeAccount = styled.div`
  display: flex;
  justify-content: center;

  div {
    font-size: 14px;
  }

  button {
    border: none;
    background-color: white;
    font-size: 14px;
    color: dodgerblue;
  }
`;

export const CustomTextInput = styled.div`
  margin: 10px 0 20px 0;
  text-align: left;
  h6 {
    margin-left: 6px;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Error = styled.div`
  // background-color: black;
  margin-top: 5px;
  color: red;
  font-weight: bold;
  font-size: 12px;
`;
