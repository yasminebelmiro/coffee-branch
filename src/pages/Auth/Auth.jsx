import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import {
  AuthContainer,
  AuthContent,
  Button,
  ErrorMessage,
  Form,
  GoogleButton,
  Icon,
  Input,
  Line,
  LoginContainer,
  RegisterContianer,
  Row,
  Text,
  Title,
} from "./style";

import Header from "../../components/Header/Header";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  const schemaRegister = yup.object().shape({
    name: yup.string().required("Este é um campo obrigatório!"),
    email: yup.string().required("Este é um campo obrigatório!"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres!")
      .required("Este é um campo obrigatório!"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser idênticas!")
      .required("Este é um campo obrigatório!"),
  });

  const schemaLogin = yup.object().shape({
    email: yup.string().required("Este é um campo obrigatório!"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres!")
      .required("Este é um campo obrigatório!"),
  });

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
  } = useForm({ resolver: yupResolver(schemaRegister) });

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmitLogin = (data) => {
    console.log(data);
  };

  const onSubmitRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <AuthContent>
        <AuthContainer>
          <Row>
            <RegisterContianer>
              <Title>Cadastrar</Title>
              <Form onSubmit={handleSubmitRegister(onSubmitRegister)}>
                <Input
                  {...registerRegister("name")}
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                />
                <ErrorMessage>{errorsRegister.name?.message}</ErrorMessage>
                <Input
                  {...registerRegister("email")}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage>{errorsRegister.email?.message}</ErrorMessage>
                <Input
                  {...registerRegister("password")}
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <ErrorMessage>{errorsRegister.password?.message}</ErrorMessage>
                <Input
                  {...registerRegister("confirm_password")}
                  type="password"
                  name="confirm_password"
                  placeholder="Confirmar senha"
                />
                <ErrorMessage>
                  {errorsRegister.confirm_password?.message}
                </ErrorMessage>
                <Button type="submit">Cadastrar</Button>
              </Form>
            </RegisterContianer>
            <Line></Line>
            <LoginContainer>
              <Title>Login</Title>
              <Form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                <Input
                  {...registerLogin("email")}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage>{errorsLogin.email?.message}</ErrorMessage>
                <Input
                  {...registerLogin("password")}
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <ErrorMessage>{errorsLogin.password?.message}</ErrorMessage>
                <Button type="submit">Entrar</Button>
              </Form>
            </LoginContainer>
          </Row>
          <Text>ou</Text>
          <GoogleButton onClick={() => signInGoogle()}>
            Entrar com&nbsp;
            <Icon as={FcGoogle} />
          </GoogleButton>
        </AuthContainer>
      </AuthContent>
    </>
  );
};
export default Auth;
