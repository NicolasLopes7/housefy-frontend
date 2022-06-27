import { Flex, Image } from '@chakra-ui/react';
import { Header } from '@components/Login/Header';
export default function Home() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Flex alignItems="center" justifyContent="center">
        <Image src={'/house.gif'}  alt="House GIF"/>
      </Flex>
    </Flex>
  );
}
