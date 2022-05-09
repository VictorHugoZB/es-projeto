/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormField from '../components/FormField';
import { useAccounts } from '../context/AccountsContext';
import { useAuth } from '../context/AuthContext';

const MTextField = styled(TextField)`
  margin: 0.5rem 0;
`;

export default function RegisterUser() {
  const { register, handleSubmit } = useForm();
  const { setAuthUser, setRole } = useAuth();
  const navigate = useNavigate();
  const { accounts, setAccounts } = useAccounts();

  const onSubmit = (data) => {
    if (data.senha !== data.confirmarSenha) {
      alert('Senhas são diferentes');
      return;
    }

    const users = [...accounts.users];
    users.push({ ...data });
    setAccounts({ ...accounts, users });
    setAuthUser(data.nome);
    setRole('user');
    alert('Usuário registrado com sucesso');
    navigate('/user-page');
  };

  return (
    <FormField title="Registrar usuário">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <MTextField
          {...register('nome')}
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          label="Nome"
          required
          fullWidth
        />
        <MTextField
          {...register('email')}
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          required
          fullWidth
        />
        <MTextField
          {...register('celular')}
          type="number"
          name="celular"
          placeholder="Digite seu celular"
          label="Celular"
          required
          fullWidth
        />
        <MTextField
          {...register('senha')}
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          label="Senha"
          required
          fullWidth
        />
        <MTextField
          {...register('confirmarSenha')}
          type="password"
          name="confirmarSenha"
          placeholder="Repita sua senha"
          label="Confirmar senha"
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
              Registrar Usuário
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" fullWidth>Voltar</Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormField>
  );
}
