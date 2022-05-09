import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from '@emotion/styled';
import Radio from '@mui/material/Radio';

const EnunciadoContainer = styled.div`
  margin: 1rem 0 2rem;
`;

export default function Question({ questao, value, onChange }) {
  return (
    <>
      <EnunciadoContainer>
        <h2>{questao.enunciado}</h2>
      </EnunciadoContainer>
      <FormControl>
        <FormLabel>Resposta</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => onChange(e, questao.id)}
        >
          <FormControlLabel value="5" control={<Radio />} label="Concordo totalmente" />
          <FormControlLabel value="4" control={<Radio />} label="Concordo parcialmente" />
          <FormControlLabel value="3" control={<Radio />} label="Não concordo nem discordo" />
          <FormControlLabel value="2" control={<Radio />} label="Discordo parcialmente" />
          <FormControlLabel value="1" control={<Radio />} label="Discordo totalmente" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
