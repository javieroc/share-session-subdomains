import { Link } from 'react-router-dom';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon?: IconType;
  children: string;
  redirect: string;
  isDisabled?: boolean;
}

function NavItem({
  icon, children, redirect, isDisabled = false,
}: Props) {
  return (
    isDisabled ? (
      <Box>
        <Flex
          align="center"
          p={2}
          role="group"
          cursor="not-allowed"
          color="gray.400"
        >
          {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
          )}
          {children}
        </Flex>
      </Box>
    ) : (
      <Link to={redirect}>
        <Flex
          align="center"
          p={2}
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'gray.600',
            color: 'white',
          }}
        >
          {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
            _groupHover={{
              color: 'white',
            }}
          />
          )}
          {children}
        </Flex>
      </Link>
    )
  );
}

export { NavItem };
