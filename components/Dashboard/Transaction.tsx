import {
  Checkbox,
  Flex,
  Heading,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useTransactionsProvider } from '@contexts/transactions';
import { Transaction as TransactionType } from '@generated/generated-types.d';
import { PropsWithChildren } from 'react';
import { TransactionDetailsModal } from './TransactionDetailsModal';

type TransactionProps = PropsWithChildren<{
  transaction: TransactionType;
}>;

export const Transaction = ({ transaction }: TransactionProps) => {
  const { completeTransaction } = useTransactionsProvider();
  const { onOpen, ...disclosure } = useDisclosure();
  return (
    <Skeleton isLoaded={!!transaction} rounded="lg" onClick={onOpen}>
      <Flex
        padding={5}
        bg={'gray.100'}
        rounded="lg"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        _hover={{ bg: 'gray.200' }}
      >
        <Flex alignItems="center" gap={4}>
          <Checkbox
            size="lg"
            borderColor="gray.300"
            borderRadius="lg"
            onChange={() => completeTransaction(transaction)}
          />
          <Flex flexDirection="column" gap={2}>
            <Heading size="sm">{transaction?.name}</Heading>
            <Text size="xs">{transaction?.description}</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap={2}>
          <Heading size="sm">- ${transaction?.amount}</Heading>
          <Text size="xs">10:00 AM</Text>
        </Flex>
      </Flex>
      {disclosure.isOpen && (
        <TransactionDetailsModal
          disclosure={disclosure}
          transaction={transaction}
        />
      )}
    </Skeleton>
  );
};
