import { Flex, Heading, Text } from '@chakra-ui/react';

function Forbidden(): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.50"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="2xl">403</Heading>
      <Heading size="md">Forbidden</Heading>
      <Text fontSize="sm">Access to this resource on this server is denied!</Text>
    </Flex>
  );
}

export { Forbidden };
