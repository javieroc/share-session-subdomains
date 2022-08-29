import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { CgTemplate, CgOrganisation } from 'react-icons/cg';
import { MdOutlineCampaign } from 'react-icons/md';
import { FaWpforms, FaFlagCheckered } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { NavItem } from './NavItem';
import { Brand } from './Brand';

interface Props extends BoxProps {
  onClose: () => void;
}

interface LinkItem {
  name: string;
  icon: IconType;
  redirect: string;
}

const LinkItems: Array<LinkItem> = [
  {
    name: 'Organizations', icon: CgOrganisation, redirect: '/organizations',
  },
  {
    name: 'Email Templates', icon: CgTemplate, redirect: '/email-templates',
  },
  {
    name: 'Landing Templates', icon: FaWpforms, redirect: '/templates/landing',
  },
  {
    name: 'Completion Templates', icon: FaFlagCheckered, redirect: '/templates/completion',
  },
  {
    name: 'Campaigns', icon: MdOutlineCampaign, redirect: '/campaigns',
  },
];

function Sidebar({ onClose, ...rest }: Props): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      borderRightWidth="2px"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Brand logoUrl={undefined} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          redirect={link.redirect}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

export { Sidebar };
