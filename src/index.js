import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import App from './App';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:8081/graphql' }),
    cache: new InMemoryCache()
});

const AppWithProvider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));