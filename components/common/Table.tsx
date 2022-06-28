import {
  TableContainer,
  Table as ChakraTable,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';

export const Table = ({ columns, rows }) => {
  return (
    <TableContainer>
      <ChakraTable variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {columns?.map((column) => (
              <Th key={column}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows?.map((row) => (
            <Tr key={row?.id}>
              {Object.values(row).map((value: any) => (
                <Td key={value}>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
