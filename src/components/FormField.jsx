import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 60%;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: .5rem;
  border: 1px solid gray;
  position: relative;
`;

const Title = styled.h2`
  display: inline-block;
  background-color: #dae3f3;
  position: absolute;
  top: 0;
  left: 2rem;
  transform: translateY(-50%);
  padding: 0 5px
`;

export default function FormField({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
