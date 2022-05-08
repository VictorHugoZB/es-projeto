import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
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
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Entrar
        </Button>
      </form>
    </FormField>
  );
}
