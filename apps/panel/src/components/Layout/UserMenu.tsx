import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';
import { useLogout } from '../../features/Auth/hooks';

interface Props {
  user: User;
}

function UserMenu({ user }: Props): JSX.Element {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    queryClient.clear();
    logout();
    navigate('/auth/login', { replace: true });
  };

  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton
          py={2}
          transition="all 0.3s"
          _focus={{ boxShadow: 'none' }}
        >
          <HStack>
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{`${user?.firstName} ${user?.lastName}`}</Text>
            </VStack>
            <Box>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue('white', 'gray.900')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          display="flex"
          flexDirection="column"
        >
          <MenuItem onClick={() => handleLogout()}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export { UserMenu };
