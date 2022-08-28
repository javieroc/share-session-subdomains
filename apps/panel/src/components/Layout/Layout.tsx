import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { SimpleNav } from './SimpleNav';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Box minH="100vh" bg="white">
      <SimpleNav />
      <Box padding="4">
        {children}
      </Box>
    </Box>
  );
}

export { Layout };
