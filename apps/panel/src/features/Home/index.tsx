import { Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { Layout } from '../../components'
import { ProductCard } from './components';
import { useProducts } from './hooks';

function Home(): JSX.Element {
  const { data: products } = useProducts();

  return (
    <Layout>
      <Heading>Home</Heading>
      <Wrap spacing="24px" justify="flex-start" width="100%">
      {products?.map((product) => (
        <WrapItem key={product.id}>
          <ProductCard product={product} />
        </WrapItem>
      ))}
    </Wrap>
    </Layout>
  );
}

export { Home };
