import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const Form = styled.form`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background-color: #e4200e;
  border: 2px solid #b81809;
  border-radius: 2px;
  padding: 10px;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SubmitButton = styled.input`
  background-color: #e4200e;
  border: 2px solid #b81809;
  border-radius: 2px;
  padding: 10px;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, SubmitButton, Container, Error, LoginContainer };