import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import FormField from '../components/FormField';

const MTextField = styled(TextField)`
  margin: 0.5rem 0;
`;

export default function RegisterUser() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas digitadas são diferentes.');
      return;
    }
    alert('Sua conta foi criada');
  };

  return (
    <FormField title="Registrar usuário">
      <form
        onSubmit={(e) => onSubmit(e)}
      >
        <MTextField
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          label="Nome"
          required
          fullWidth
        />
        <MTextField
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          required
          fullWidth
        />
        <MTextField
          type="number"
          name="celular"
          placeholder="Digite seu celular"
          label="Celular"
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
        <MTextField
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          type="password"
          name="confirmarSenha"
          placeholder="Repita sua senha"
          label="Confirmar senha"
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Criar Usuario
        </Button>
      </form>
    </FormField>
  );
}
