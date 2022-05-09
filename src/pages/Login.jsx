import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormField from '../components/FormField';
import { useAccounts } from '../context/AccountsContext';
import { useAuth } from '../context/AuthContext';

const MTextField = styled(TextField)`
  margin: 0.5rem 0;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setAuthUser, setRole } = useAuth();
  const { login } = useAccounts();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const role = login(email, senha);
    if (!role) {
      alert('Erro ao realizar login');
      return;
    }
    alert('Login realizado com sucesso');
    setAuthUser(email);
    setRole(role);

    switch (role) {
      case 'specialist':
        navigate('/specialist-page');
        return;
      case 'user':
        navigate('/user-page');
        return;
      case 'adm':
        navigate('/adm-page');
        return;
      default:
        navigate('/');
    }
  };

  return (
    <FormField title="Fazer Login">
      <form
        onSubmit={onSubmit}
      >
        <MTextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          required
          fullWidth
        />
        <MTextField
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          label="Senha"
          required
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" fullWidth>Voltar</Button>
            </Link>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ marginTop: 2 }}>
        <Link to="/register-user">Não possui conta?</Link>
      </Box>
    </FormField>
  );
}
