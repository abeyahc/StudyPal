/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  });

const MyApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => MyApp);





