import {
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Product } from '../types';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props): JSX.Element {
  return (
    <HStack
      padding={2}
      borderRadius={2}
      borderWidth={4}
      borderColor="black"
      width="360px"
      align="flex-start"
    >
      <VStack align="flex-start">
        <Heading size="md">{product.name}</Heading>
        <Text noOfLines={3} lineHeight="20px">{product.description}</Text>
      </VStack>
    </HStack>
  );
}

export { ProductCard };
