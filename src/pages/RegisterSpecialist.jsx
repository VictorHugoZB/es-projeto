import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
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
    <FormField title="Registrar profissional">
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
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <MTextField
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
              type="date"
              name="dataNascimento"
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
          name="preco"
          type="text"
          label="Faixa de preço"
          placeholder="Digite sua faixa de preço por sessão"
          required
          fullWidth
        />
        <MTextField
          name="preco"
          type="text"
          label="Faixa de preço"
          placeholder="Digite sua faixa de preço por sessão"
          required
          fullWidth
        />
        <MTextField
          name="description"
          type="text"
          label="Apresentação"
          placeholder="Faça uma apresentação sua!"
          multiline
          rows={5}
          maxRows={4}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Registrar como profissional
        </Button>
      </form>
    </FormField>
  );
}
