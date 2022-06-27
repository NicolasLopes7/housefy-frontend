import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { TransactionsProvider } from '@contexts/transactions';
import { AuthProvider } from '../contexts/auth';
import client from '../services/apollo-client';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <TransactionsProvider>
            <Component {...pageProps} />
          </TransactionsProvider>
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
