import { Flex, Input, Text } from '@chakra-ui/react';
import { useAuthProvider } from '../../contexts/auth';
import useForm from '../../hooks/useForm';
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
import { useState } from 'react';

export const LoginModal = ({ disclosure: { isOpen, onClose } }) => {
  const { authenticate } = useAuthProvider();
  const [error, setError] = useState('');
  const [{ formState }, { handleFormChange }] = useForm({
    username: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      await authenticate(formState);
    } catch (error) {
      setError('User not found');
    }
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={8}
          >
            <Input
              placeholder="Username"
              type="text"
              value={formState.username}
              onChange={handleFormChange('username')}
            />
            <Input
              placeholder="Password"
              type="password"
              value={formState.password}
              onChange={handleFormChange('password')}
            />
            {error && (
              <Text color="red" opacity={0.6}>
                {error}
              </Text>
            )}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Submit
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
