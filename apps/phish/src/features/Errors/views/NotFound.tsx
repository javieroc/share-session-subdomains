import { Flex, Heading, Text } from '@chakra-ui/react';

function NotFound(): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.50"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="2xl">404</Heading>
      <Heading size="md">Page Not Found</Heading>
      <Text fontSize="sm">The resource requested could not be found on this server!</Text>
    </Flex>
  );
}

export { NotFound };
