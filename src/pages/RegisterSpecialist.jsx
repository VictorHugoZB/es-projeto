/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
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

    const specialists = [...accounts.specialists];
    specialists.push({ ...data });
    setAccounts({ ...accounts, specialists });
    setAuthUser(data.nome);
    setRole('specialist');
    alert('Especialista registrado com sucesso');
    navigate('/specialist-page');
  };

  return (
    <FormField title="Registrar profissional">
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
            <MTextField
              {...register('genero')}
              select
              label="Gênero"
              name="genero"
              placeholder="Escolhe seu Gênero"
              required
              fullWidth
            >
              <MenuItem value="M">
                Maculino
              </MenuItem>
              <MenuItem value="F">
                Feminino
              </MenuItem>
              <MenuItem value="O">
                Outro
              </MenuItem>
            </MTextField>
          </Grid>
          <Grid item xs={4}>
            <MTextField
              {...register('dataNasci')}
              type="date"
              name="dataNasci"
              label="Data de Nascimento"
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={6}>
            <MTextField
              {...register('localizacao')}
              name="localizacao"
              type="text"
              label="Localização"
              placeholder="Digite a localização do seu consultório"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs="auto">
            <Checkbox defaultChecked />
            Realizo sessões à distância
          </Grid>
        </Grid>
        <MTextField
          {...register('preco')}
          name="preco"
          type="text"
          label="Faixa de preço"
          placeholder="Digite sua faixa de preço por sessão"
          required
          fullWidth
        />
        <MTextField
          {...register('descricao')}
          name="descricao"
          type="text"
          label="Apresentação"
          placeholder="Faça uma apresentação sua!"
          multiline
          rows={5}
          maxRows={4}
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
    </FormField>
  );
}
