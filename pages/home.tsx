import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Header } from '@components/Dashboard/Header';
import { TransactionsList } from '@components/Dashboard/TransactionsList';

const Home = () => {
  return (
    <Container
      minWidth={'100%'}
      flexDirection="column"
      display="flex"
      gap={24}
      padding={50}
    >
      <Header />
      <Grid
        h="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} bg="#F7FAFC">
          <TransactionsList />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={3} bg="tomato" />
      </Grid>
    </Container>
  );
};

export default Home;
