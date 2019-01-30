import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;

  small {
    padding-top: 10px;
    color: #fff;
  }

  a {
    color: #f9d71c;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 5px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  select {
    flex: 1;
    height: 55px;
    padding: 0 0;
    background: #fff;
    font-size: 18px;
    margin-right: 10px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 100px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #f9d71c;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    opacity: 0.8;
    transition: 0.5s;

    &:hover {
      opacity: 1;
      transition: 0.3s;
    }
  }
`;
