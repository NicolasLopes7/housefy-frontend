import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { Transaction } from '@generated/generated-types';
import { useTransactionsProvider } from '@contexts/transactions';
import { GetTransactionDetails } from 'graphql/transactions/get-transactions-detail-query';
import { DataRow } from '@components/common/DataRow';
import { formatCurrency, formatLongDate } from 'utils/noop';
import { Table } from '@components/common/Table';

type TransactionDetailsModalProps = PropsWithChildren<{
  disclosure: {
    isOpen: boolean;
    onClose: () => void;
  };
  transaction: Transaction;
}>;

export const TransactionDetailsModal = ({
  disclosure: { isOpen, onClose },
  transaction,
}: TransactionDetailsModalProps) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [trx, setTRX] =
    useState<GetTransactionDetails['transaction']>(undefined);

  const { getTransactionDetails } = useTransactionsProvider();

  useEffect(() => {
    const getTrx = async () => {
      if (!transaction.id) return;
      const result = await getTransactionDetails(transaction.id);
      setTRX(result);
    };
    getTrx();
  }, [transaction]);

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          #{trx?.id} - {trx?.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <DataRow>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input disabled value={trx?.name} />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input disabled value={trx?.description} />
            </FormControl>
            <FormControl>
              <FormLabel>Due Date</FormLabel>
              <Input disabled value={formatLongDate(trx?.dueDate)} />
            </FormControl>
          </DataRow>
          <DataRow>
            {trx?.isRecurrent && (
              <FormControl>
                <FormLabel>Period</FormLabel>
                <Input disabled value={trx?.recurrencyPeriod} />
              </FormControl>
            )}
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <InputGroup>
                <InputLeftAddon>R$</InputLeftAddon>
                <Input disabled value={formatCurrency(trx?.amount ?? 0)} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Input disabled value={trx?.status ?? 'Pending'} />
            </FormControl>
            <FormControl>
              <FormLabel>Assignees</FormLabel>
              {trx?.assignees?.map((assignee) => (
                <Avatar
                  key={assignee.id}
                  name={assignee?.user?.name}
                  size="sm"
                />
              ))}
            </FormControl>
          </DataRow>
          <Divider mb={6} />
          <Table
            columns={['Id', 'Amount', 'Paid At', 'User']}
            rows={[
              {
                id: '#33',
                amount: 'R$ 120,00',
                paidAt: 'Jun 26, 2022',
                user: <Avatar key={1} name="Nicolas Lopes" size="sm"/>,
              },
              {
                id: '#34',
                amount: 'R$ 100,00',
                paidAt: 'Jun 26, 2022',
                user: <Avatar key={1} name="Antonio Ricardo" size="sm"/>,
              },
            ]}
          />
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
