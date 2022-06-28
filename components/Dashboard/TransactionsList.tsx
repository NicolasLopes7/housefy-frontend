import {
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useTransactionsProvider } from '@contexts/transactions';

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
        <Heading size="lg">Pending Transactions</Heading>
        <Button rounded="lg" colorScheme="gray" onClick={onOpen}>
          Add One
        </Button>
      </Flex>
      {!transactions?.length ? (
        <Heading size="md" opacity="0.6">
          There{`'`}s No Pending Transactions :{`)`}
        </Heading>
      ) : (
        <Stack style={{ overflowY: 'auto' }}>
          {transactions?.map((transaction) => (
            <Skeleton isLoaded={!isLoading} key={transaction.id}>
              <Transaction transaction={transaction} />
            </Skeleton>
          ))}
        </Stack>
      )}

      <AddTransactionModal disclosure={disclosure} />
    </Flex>
  );
};
