import { Flex } from '@chakra-ui/react';

export const DataRow = ({ children }) => (
  <Flex alignItems="center" justifyContent="space-between" gap={6} pb={6}>
    {children}
  </Flex>
);
