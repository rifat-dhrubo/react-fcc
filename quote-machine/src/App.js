import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import logo from './loading.svg';
import twitter from './twitter.svg';

const colors = [
  '#364f6b',
  '#3fc1c9',
  '#fc5185',
  '#00b8a9',
  '#48466d',
  '#3d84a8',
  '#46cdcf',
  '#f08a5d',
  '#b83b5e',
  '#6a2c70',
  '#f38181',
  '#95e1d3',
  '#48466d',
  '#3d84a8',
  '#46cdcf',
  '#abedd8',
  '#f67280',
  '#c06c84',
  '#6c5b7b',
  '#355c7d',
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#77B1A9',
  '#73A857',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState(0);
  const wrapper = useRef(null);

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetch(
        'https://type.fit/api/quotes'
      ).then((response) => response.json());
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Getting the first random quote
  useEffect(() => {
    setQuote(data[Math.floor(Math.random() * 1600)]);
  }, [data]);

  // Changing color based on click
  useEffect(() => {
    wrapper.current.style.color = colors[color];
    wrapper.current.style.background = colors[color];
  }, [color]);

  // Getting random quote on button click
  const randomQuotes = () => {
    if (data.length === 0) {
      setLoading(true);
    } else {
      setColor(Math.floor(Math.random() * colors.length));
      setQuote(data[Math.floor(Math.random() * 1600)]);
    }
  };

  return (
    <Wrapper ref={wrapper}>
      <QuoteBox id="quote-box">
        {loading || quote === undefined ? (
          <img src={logo} alt="Loading" />
        ) : (
          <>
            <QuoteText id="text">
              <h3>{quote.text}</h3>
            </QuoteText>
            <QuoteAuthor id="author">
              {' '}
              {quote.author === null ? <p>UnKnown</p> : <p>- {quote.author}</p>}
            </QuoteAuthor>
            <QuoteUtil>
              <a
                href="https://twitter.com/intent/tweet"
                rel="noopener noreferrer"
                target="_blank"
                id="tweet-quote"
              >
                <img src={twitter} alt="twitter link" />
              </a>
              <button type="button" onClick={randomQuotes} id="new-quote">
                Get a new quote
              </button>
            </QuoteUtil>
          </>
        )}
      </QuoteBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #fc5185;
  color: #fc5185;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
`;

const QuoteBox = styled.div`
  color: inherit;
  border-radius: 7px;
  background: #fbfbfb;
  padding: 6em 1em;
  max-width: 650px;
  flex-basis: 85%;
  display: flex;
  flex-wrap: wrap;
  img {
    margin: auto;
  }
`;

const QuoteText = styled.div`
  flex-basis: 100%;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
`;
const QuoteAuthor = styled.div`
  flex-basis: 30%;
  margin-left: auto;
`;
const QuoteUtil = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 60px;
    height: auto;
    display: block;
  }

  button {
    background: rgba(251, 251, 251, 0.15);
    border: 1px solid #fbfbfb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 150px;
    padding: 15px 10px;
    font-family: inherit;
    align-self: center;
    cursor: pointer;
    font-size: 17px;
    outline: none;
    margin: 0 0.5em;
    color: inherit;
  }
`;

export default App;
