import {
  Box, Image, Heading, BoxProps,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props extends BoxProps {
  logoUrl: string | undefined;
}

function Brand({ logoUrl, ...boxProps }: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <Box {...boxProps} onClick={() => navigate('/', { replace: true })} cursor="pointer">
      {logoUrl ? (
        <Image
          src={logoUrl}
          cursor="pointer"
          width="150px"
          height="60px"
          objectFit="scale-down"
        />
      )
        : <Heading fontSize="large" fontWeight="bold">Pishing tool</Heading>}
    </Box>
  );
}

export { Brand };
