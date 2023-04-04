import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Api/auth/authApi";
import { Button, TextField, styled } from "@mui/material";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "32px",
});

const StyledTextField = styled(TextField)({
  margin: "8px",
  width: "50%",
});

const StyledButton = styled(Button)({
  margin: "24px 0 16px",
  width: "50%",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const { data } = await login({ email, password });
        localStorage.setItem("token", data.token);
        navigate("/user", { replace: true });
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    }
  };
  return (
    <StyledForm onSubmit={loginHandler}>
      <StyledTextField
        label="Email"
        variant="outlined"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <StyledButton type="submit" variant="contained" color="primary" fullWidth>
        Login
      </StyledButton>
    </StyledForm>
  );
};

export default Login;
