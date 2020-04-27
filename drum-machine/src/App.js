import React from 'react';
import styled from '@emotion/styled';
import Player from './Player';

function App() {
  return (
    <Page>
      <Player />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #364f6b;
`;

export default App;
