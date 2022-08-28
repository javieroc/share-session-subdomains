import {
  VStack,
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.400"
    >
      <VStack
        spacing="16px"
        padding="16px"
        boxShadow="md"
        bg="white"
      >
        {children}
      </VStack>
    </Flex>
  );
}

export { Layout };
