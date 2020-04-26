import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown/with-html';

function App() {
  const [markDown, setMarkDown] = useState('');

  const handleEditorChange = (event) => {
    setMarkDown(event.target.value);
  };
  return (
    <Wrapper>
      <Editor>
        <textarea id="textArea" onChange={handleEditorChange} />
      </Editor>
      <Preview source={markDown} escapeHtml={false} />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  background: '#364F6B',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '0 1rem',
});

const Editor = styled.div(
  {
    background: '#f5f5f5',
    minHeight: '30vh',
    fontFamily: 'inherit',
    padding: '1rem',

    textArea: {
      background: '#f5f5f5',
      border: 'none',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      width: '100%',
      height: '100%',
      ':focus': {
        outline: '1px solid #f5f5f5',
      },
    },
  },
  (props) => ({
    display: props.display || 'block',
  })
);

const Preview = styled(ReactMarkdown)({
  background: '#f5f5f5',
  minHeight: '60vh',
  overflowY: 'scroll',
  padding: '1rem',
});

export default App;
