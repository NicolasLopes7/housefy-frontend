import { Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react';
import { LoginModal } from './LoginModal';

export const Header = () => {
  const { onOpen, ...disclosure } = useDisclosure();

  return (
    <Flex minWidth="max-content" alignItems="center" padding={50}>
      <Heading size="md">Housefy.</Heading>

      <Spacer />

      <Button colorScheme="teal" onClick={onOpen}>
        Log in
      </Button>

      <LoginModal disclosure={disclosure} />
    </Flex>
  );
};
