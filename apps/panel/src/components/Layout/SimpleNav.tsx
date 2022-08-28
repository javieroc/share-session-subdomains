import {
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useUsersMe } from '../../hooks';
import { UserMenu } from './UserMenu';

function SimpleNav() {
  const { data: user } = useUsersMe();

  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="space-between"
    >
      <Heading>Panel</Heading>
      <HStack spacing={{ base: '0', md: '6' }}>
        {user && <UserMenu user={user} />}
      </HStack>
    </Flex>
  );
}

export { SimpleNav };
