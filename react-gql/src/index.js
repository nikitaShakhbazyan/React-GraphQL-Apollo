import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';

const client = new ApolloClient ({
  uri : 'https://rickandmortyapi.com/graphql',
  cache:InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);
