import React from 'react';
import styled from '@emotion/styled';
import { Black, DarkGrey, DarkMint, LightGrey } from './colors';

function App() {
  return <Wrapper>Rendered</Wrapper>;
}

export default App;

const Wrapper = styled.div`
  background: ${DarkGrey};
`;
