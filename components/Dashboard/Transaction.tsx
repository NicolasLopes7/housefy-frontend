import { QuestionIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Skeleton, Text } from '@chakra-ui/react';
import { Transaction as TransactionType } from '@generated/generated-types.d';
import { PropsWithChildren } from 'react';

type TransactionProps = PropsWithChildren<{
  transaction: TransactionType;
}>;

export const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Skeleton isLoaded={!!transaction} rounded="lg">
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
          <IconButton aria-label="Button" colorScheme="yellow">
            <QuestionIcon />
          </IconButton>
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
    </Skeleton>
  );
};
