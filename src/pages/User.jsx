/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useAccounts } from '../context/AccountsContext';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  width: 60%;
  margin: 3rem auto;
`;

const CardPsicologo = styled.div`
  border: 1px solid gray;
  border-radius: .5rem;
  width: 100%;
  padding: .5rem;
  transition: all .6s;
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

export default function User() {
  const [psicologos, setPsicologos] = useState([]);
  const [userData, setUserData] = useState({});

  const { accounts, getAccountData } = useAccounts();
  const { authUser, role } = useAuth();

  useEffect(() => {
    setPsicologos(accounts.specialists);
  }, [accounts]);

  useEffect(() => {
    setUserData(getAccountData(authUser, role));
  }, [authUser]);
  return (
    <Container>
      <h1>
        Bem vindo,
        {' '}
        {userData.nome}
      </h1>
      <h1>Encontre profissionais próximos a você!</h1>
      {psicologos.map((p) => (
        <CardPsicologo>
          <p>
            <b>Nome:</b>
            {' '}
            {p.nome}
          </p>
          <p>
            <b>Localização:</b>
            {' '}
            {p.localizacao}
          </p>
          <p>
            <b>Genero:</b>
            {' '}
            {p.genero === 'F' ? 'Mulher' : p.genero === 'M' ? 'Homem' : 'Outro'}
          </p>
          <p>
            <b>Faixa de preco por sessão:</b>
            {' '}
            {p.preco}
          </p>
          <hr />
          <p style={{ margin: '1rem auto' }}>
            <b>Descrição:</b>
            {' '}
            {p.descricao}
          </p>
        </CardPsicologo>
      ))}
    </Container>
  );
}
