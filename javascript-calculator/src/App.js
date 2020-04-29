import React from 'react';
import styled from '@emotion/styled';
import Keys from './Keys';
import { blue, white } from './colors';

function App() {
  return (
    <Page>
      <Wrapper>
        <Keys />
      </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${blue};
`;

const Wrapper = styled.div`
  display: flex;
  background: ${white};
  padding: 1rem;
  flex-basis: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
`;

export default App;
