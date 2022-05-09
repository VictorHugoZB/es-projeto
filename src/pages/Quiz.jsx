import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import questions from '../shared/questions';
import Question from '../components/Question';

const Container = styled.div`
  width: 60%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px gray solid;
  border-radius: .5rem;
`;

export default function Quiz() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const onChange = (e, id) => {
    const tmpAnswers = { ...answers, [id]: e.target.value };
    setAnswers({ ...tmpAnswers });
  };

  const steps = questions.map((q) => (
    <Question questao={q} value={answers[q.id] || ''} onChange={onChange} />
  ));

  return (
    <Container>
      {activeStep < steps.length
        ? steps[activeStep]
        : (
          <>
            <h2 style={{ textAlign: 'center' }}>Seu resultado está pronto!</h2>
            <h2 style={{ textAlign: 'center' }}>Crie uma conta para visualiza-lo.</h2>
            <Link to="/register-user" style={{ textDecoration: 'none' }}>
              <Button fullWidth variant="contained" sx={{ marginY: 5 }}>Criar conta</Button>
            </Link>
          </>
        )}
      <Stepper activeStep={activeStep} sx={{ marginY: '2rem' }}>
        {questions.map(() => (
          <Step>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="space-between" width="100%">
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep === 0 || activeStep === steps.length}
          >
            Anterior
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep === steps.length || !answers[questions[activeStep].id]}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
