import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const HomeContainer = styled.section`
  width: 60%;
  margin: 3rem auto;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1rem 0;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <p>Procurando por excelência em tratamentos psicológicos?</p>
      <p className="text-transparent">
        Agora você pode agendar consultas com os melhores profissionais da região online,
        além de acompanhar a sua evolução com gráficos personalizados.
      </p>
      <Grid container justifyContent="center">
        <Grid item>
          <Link to="/quiz" style={{ textDecoration: 'none' }}>
            <Button
              sx={{ padding: '1rem', marginY: 2 }}
              variant="contained"
            >
              Faça seu teste
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-around" sx={{ marginTop: 10 }}>
        <Grid item>
          <Link to="/login">Já possuo conta</Link>
        </Grid>
        <Grid item>
          <Link to="/register-user">Quero criar conta</Link>
        </Grid>
        <Grid item>
          <Link to="/register-specialist">Sou um profissional</Link>
        </Grid>
      </Grid>
    </HomeContainer>
  );
}
