import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';

import BookList from './components/BookList'
import AddBook from './components/AddBook'
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Hello world</h1>
        <BookList/>
        <AddBook/>
      </main>
    </ApolloProvider>
  );
}

export default App;
