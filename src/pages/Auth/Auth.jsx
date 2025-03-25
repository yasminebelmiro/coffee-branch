import React from "react";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  AuthContent,
  AuthContainer,
  Button,
  Form,
  GoogleButton,
  Input,
  LoginContainer,
  RegisterContianer,
  Row,
  Text,
  Title,
  Icon,
  Line,
  ErrorMessage,
} from "./style";

import Header from "../../components/Header/Header";

const Auth = () => {
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
              <GoogleButton>
                Cadastrar com&nbsp;
                <Icon as={FcGoogle} />
              </GoogleButton>
              <Text>ou</Text>
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
                <ErrorMessage>{errorsRegister.confirm_password?.message}</ErrorMessage>
                <Button type="submit">Cadastrar</Button>
              </Form>
            </RegisterContianer>
            <Line></Line>
            <LoginContainer>
              <Title>Login</Title>
              <GoogleButton>
                Entrar com&nbsp;
                <Icon as={FcGoogle} />
              </GoogleButton>
              <Text>ou</Text>
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
        </AuthContainer>
      </AuthContent>
    </>
  );
};

export default Auth;
