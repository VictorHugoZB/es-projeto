import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

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

export default function Navbar() {
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center" height="100%">
        <Grid item>
          <Button>
            <MenuIcon sx={{ color: '#231f20', fontSize: 40 }} />
          </Button>
        </Grid>
        <Grid item>
          <Title>MyndHealth</Title>
        </Grid>
        <Grid item>
          <Button>
            <AccountCircleIcon sx={{ color: '#231f20', fontSize: 40 }} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
