import { useQuery } from '@apollo/client';
import {
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useAuthProvider } from '@contexts/auth';
import { useTransactionsProvider } from '@contexts/transactions';
import {
  GET_TRANSACTIONS_BY_USER_ID,
  GetTransactionsByUserId,
} from 'graphql/transactions/get-transactions-by-user-id-query';
import { AddTransactionModal } from './AddTransactionModal';
import { Transaction } from './Transaction';

export const TransactionsList = () => {
  const { onOpen, ...disclosure } = useDisclosure();
  const { transactions, isLoading } = useTransactionsProvider();

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
        <Button rounded="lg" colorScheme="gray" onClick={onOpen}>
          Add One
        </Button>
      </Flex>
      <Stack style={{ overflowY: 'auto' }}>
        {transactions?.map((transaction) => (
          <Skeleton isLoaded={!isLoading} key={transaction.id}>
            <Transaction transaction={transaction} />
          </Skeleton>
        ))}
      </Stack>
      <AddTransactionModal disclosure={disclosure} />
    </Flex>
  );
};
