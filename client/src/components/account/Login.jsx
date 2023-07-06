import { useState } from "react";

import { Box, TextField, Button, styled, Typography } from "@mui/material";
const Component = styled(Box)`
  width: 400px;
  margin: auto !important;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: white;
  height: 48px;
  border-radius: 2px;
`;
const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [account, toggleAccount] = useState("login");
  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
  //   const toggleLogin = () => {
  //     toggleAccount("login");
  //   };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="username" />
            <TextField variant="standard" label="password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignUpButton onClick={() => toggleSignup()}>
              CREATE AN ACCOUNT
            </SignUpButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Username" />
            <TextField variant="standard" label="Email" />
            <TextField variant="standard" label="Password" />
            <SignUpButton>Signup</SignUpButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              ALREADY HAVE AN ACCOUNT
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
