import styled from "styled-components";

export const AuthContent = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  width: 80%;
  height: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 40px;
`;

export const Row = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Line = styled.div`
  background: #341b03;
  width: 3px;
  height: 70%;
  border-radius: 40px;
`;

export const RegisterContianer = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Major Mono Display", monospace;
  font-size: 1.5rem;
`;

export const GoogleButton = styled.button`
  width: 50%;
  margin: 1rem 0;
  height: 40px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #614209;
  color: #fff;
  border-radius: 40px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Text = styled.p``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  gap: 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #341b03;
  box-shadow: 2px 2px 5px #341b03;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: "Barlow Condensed", sans-serif;
`;

export const Button = styled.button`
  width: 100%;
  margin: 1rem 0;
  height: 40px;
  font-family: "Barlow Condensed", sans-serif;
  border: none;
  background: #341b03;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 40px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
