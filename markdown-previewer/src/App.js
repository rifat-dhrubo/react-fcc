import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown/with-html';
import { TiArrowMaximise } from 'react-icons/ti';

function App() {
  const [markDown, setMarkDown] = useState('');
  const [editorDisplay, setEditorDisplay] = useState('flex');
  const [editorSize, setEditorSize] = useState('30vh');
  const [previewDisplay, setPreviewDisplay] = useState('flex');
  const [previewSize, setPreviewSize] = useState('50vh');

  const handleInput = (event) => {
    setMarkDown(event.target.value);
  };

  const handleEditor = () => {
    if (editorDisplay === 'flex' && editorSize === '30vh') {
      setPreviewDisplay('none');
      setEditorSize('90vh');
    } else {
      setPreviewDisplay('flex');
      setEditorSize('30vh');
    }
  };
  const handlePreview = () => {
    if (previewDisplay === 'flex' && previewSize === '50vh') {
      setEditorDisplay('none');
      setPreviewSize('90vh');
    } else {
      setEditorDisplay('flex');
      setPreviewSize('50vh');
    }
  };

  return (
    <Wrapper>
      <Editor display={editorDisplay} minHeight={editorSize}>
        <span>
          <TiArrowMaximise onClick={handleEditor} />
        </span>
        <textarea id="textArea" onChange={handleInput} />
      </Editor>
      <Preview display={previewDisplay} minHeight={previewSize}>
        <span>
          <TiArrowMaximise onClick={handlePreview} />
        </span>
        <ReactMarkdown source={markDown} escapeHtml />
      </Preview>
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

    fontFamily: 'inherit',
    padding: '1rem',
    margin: '1rem 0',
    flexDirection: 'column',

    span: {
      display: 'flex',
      justifyContent: 'flex-end',

      svg: {
        cursor: 'pointer',
      },
    },

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
    display: props.display || 'flex',
    minHeight: props.minHeight || '30vh',
  })
);

const Preview = styled.div(
  {
    background: '#f5f5f5',

    overflowY: 'scroll',
    padding: '1rem',
    margin: '1rem 0',
    flexDirection: 'column',

    span: {
      display: 'flex',
      justifyContent: 'flex-end',

      svg: {
        cursor: 'pointer',
      },
    },
  },
  (props) => ({
    display: props.display || 'flex',
    minHeight: props.minHeight || '50vh',
  })
);

export default App;
