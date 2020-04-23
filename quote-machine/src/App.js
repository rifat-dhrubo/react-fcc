import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import logo from './loading.svg';
import twitter from './twitter.svg';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState({});

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      setLoading(true);
      const result = await fetch(
        'https://type.fit/api/quotes'
      ).then((response) => response.json());
      setData(result);
      setLoading(false);
      console.log('fetched data');
    };
    fetchData();
  }, []);

  useEffect(() => {
    setQuote(data[Math.floor(Math.random() * 1600)]);
  }, [data]);

  // Getting random quote
  const randomQuotes = () =>
    data.length === 0
      ? setLoading(true)
      : setQuote(data[Math.floor(Math.random() * 1600)]);

  return (
    <Wrapper>
      <QuoteBox id="quote-box">
        {loading ? (
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
  align-items: center;
  background: #ff1e76;
  justify-content: center;
`;

const QuoteBox = styled.div`
  color: #ff1e76;
  border-radius: 7px;
  background: #fbfbfb;
  padding: 6em 1em;
  max-width: 650px;
  flex-basis: 85%;
  display: flex;
  flex-wrap: wrap;
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
  }
`;

export default App;
