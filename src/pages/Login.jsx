import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormField from '../components/FormField';

const MTextField = styled(TextField)`
  margin: 0.5rem 0;
`;

export default function Login() {
  return (
    <FormField title="Fazer Login">
      <form
        onSubmit={() => alert('Login realizado')}
      >
        <MTextField
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          required
          fullWidth
        />
        <MTextField
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
              Registrar como profissional
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
