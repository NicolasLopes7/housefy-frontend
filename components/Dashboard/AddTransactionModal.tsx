import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import {
  Button,
  ButtonGroup,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  TransactionStatus,
  TransactionType,
} from '@generated/generated-types.d';
import { SelectAssignees } from './SelectAsignees';
import useForm from 'hooks/useForm';
import { CREATE_TRANSACTION } from 'graphql/transactions/create-transaction-mutation';
import { useMutation } from '@apollo/client';
import { useTransactionsProvider } from '@contexts/transactions';

const DEFAULT_STATE = {
  name: '',
  description: '',
  type: undefined,
  amount: 0,
  assignees: [],
  dueDate: new Date(),
};

export const AddTransactionModal = ({ disclosure: { isOpen, onClose } }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [{ formState }, { handleFormChange, setFormState }] =
    useForm(DEFAULT_STATE);
  const [shouldCleanup, setCleanup] = useState(false)
  const [createTransaction] = useMutation(CREATE_TRANSACTION);
  const { refetchTransactions } = useTransactionsProvider();

  const handleSubmit = async () => {
    await createTransaction({
      variables: {
        data: {
          ...formState,
          amount: Number(formState.amount),
          assignees: {
            createMany: {
              data: formState.assignees,
              skipDuplicates: true,
            },
          },
          status: TransactionStatus.Pending,
        },
      },
    });
    refetchTransactions();
    setFormState(DEFAULT_STATE);
    setCleanup(true);
    onClose();
  };

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Title"
              value={formState.name}
              onChange={handleFormChange('name')}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Description"
              value={formState.description}
              onChange={handleFormChange('description')}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Type</FormLabel>
            <Select
              placeholder="Type"
              value={formState.type}
              onChange={handleFormChange('type')}
            >
              {Object.entries(TransactionType).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Amount</FormLabel>
            <Input
              placeholder="Amount"
              type="number"
              value={formState.amount}
              onChange={handleFormChange('amount')}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Due Date</FormLabel>
            <Input
              placeholder="Due Date"
              type="date"
              value={formState.dueDate}
              onChange={handleFormChange('dueDate')}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Assignees</FormLabel>
            <SelectAssignees onChange={handleFormChange('assignees')} cleanup={shouldCleanup}/>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Create
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
