import { useQuery } from '@apollo/client';
import { Button, Flex, Heading, Skeleton, Stack } from '@chakra-ui/react';
import { useAuthProvider } from '@contexts/auth';
import {
  GET_TRANSACTIONS_BY_USER_ID,
  GetTransactionsByUserId,
} from 'graphql/transactions/get-transactions-by-user-id-query';
import { Transaction } from './Transaction';

export const TransactionsList = () => {
  const { user } = useAuthProvider();
  const { data: { transactions } = {}, loading } =
    useQuery<GetTransactionsByUserId>(GET_TRANSACTIONS_BY_USER_ID, {
      skip: !user,
      variables: {
        id: user?.id,
      },
    });

  return (
    <Flex
      flexDirection="column"
      bg="#F7FAFC"
      padding={8}
      rounded={'md'}
      gap={16}
      h="800px"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="lg">Transactions</Heading>
        <Button rounded="lg" colorScheme="gray">
          Add One
        </Button>
      </Flex>
      <Stack style={{ overflowY: 'auto' }}>
        {transactions?.map((transaction) => (
          <Skeleton isLoaded={!loading} key={transaction.id}>
            <Transaction transaction={transaction} />
          </Skeleton>
        ))}
      </Stack>
    </Flex>
  );
};
