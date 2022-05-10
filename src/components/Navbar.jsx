/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #00b0f0;
  padding: 0 6rem;
  z-index: 999;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Item = styled(ListItem)`
  padding: 1rem 2rem;
  transition: all .5s;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

export default function Navbar() {
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { role } = useAuth();

  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center" height="100%">
        <Grid item>
          <Button onClick={() => setMenuOpen(true)}>
            <MenuIcon sx={{ color: '#231f20', fontSize: 40 }} />
          </Button>
        </Grid>
        <Grid item>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Title>MyndHealth</Title>
          </Link>
        </Grid>
        <Grid item>
          <Button onClick={() => setUserOpen(true)}>
            <AccountCircleIcon sx={{ color: '#231f20', fontSize: 40 }} />
          </Button>
        </Grid>
      </Grid>
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <List>
          {role
            ? role === 'user'
              ? (
                <>
                  <Item>Visualizar testes</Item>
                  <Item>Acompanhamento</Item>
                  <Item>Biblioteca</Item>
                </>
              )
              : role === 'specialist'
                ? (
                  <>
                    <Item>Visualizar pacientes</Item>
                    <Item>Minha agenda</Item>
                  </>
                )
                : (
                  <>
                    <Item>Gerenciar usuários</Item>
                    <Item>Gerenciar profissionais</Item>
                  </>
                )
            : (
              <Item>Faça login</Item>
            )}
        </List>
      </Drawer>
      <Drawer
        anchor="right"
        open={userOpen}
        onClose={() => setUserOpen(false)}
      >
        <List>
          <Item>Ver perfil</Item>
          <Item>Sair</Item>
        </List>
      </Drawer>
    </Container>
  );
}
