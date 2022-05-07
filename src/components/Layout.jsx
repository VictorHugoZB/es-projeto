import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './Navbar';

const AppContainer = styled.main`
  padding-top: 60px;
  background-color: #dae3f3;
`;

export default function Layout() {
  return (
    <AppContainer>
      <Navbar />
      <Outlet />
    </AppContainer>
  );
}
