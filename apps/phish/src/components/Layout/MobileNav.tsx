import {
  Flex,
  IconButton,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useUsersMe } from '../../hooks';
import { Brand } from './Brand';
import { UserMenu } from './UserMenu';

interface Props {
  onOpen: () => void;
}

function MobileNav({ onOpen }: Props) {
  const { data: user } = useUsersMe();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Brand logoUrl={undefined} display={{ base: 'flex', md: 'none' }} />

      <HStack spacing={{ base: '0', md: '6' }}>
        {user && <UserMenu user={user} />}
      </HStack>
    </Flex>
  );
}

export { MobileNav };
