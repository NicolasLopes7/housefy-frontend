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

export const Modal = ({
  disclosure: { isOpen, onClose },
  onSubmit,
  title,
  body,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>
          <ButtonGroup>
            {onSubmit && (
              <Button colorScheme="teal" mr={3} onClick={onSubmit}>
                Submit
              </Button>
            )}
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
