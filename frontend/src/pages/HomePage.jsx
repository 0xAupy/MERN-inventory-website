import React, { useEffect } from 'react';
import { VStack, Text, Container, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import ProductCard from '@/components/ProductCard'; // Ensure the correct import path

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW='container.xl' py={12} pb ={40}>
      <VStack spacing={8}>
        <Text
          fontSize="35"
          fontWeight='bold'
          bgGradient="linear(to-l, purple.500, blue.500)"
          bgClip='text'
          textAlign='center'
        >
          Current Products
        </Text>

        {products && products.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w='full'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text fontSize="xl" textAlign='center' fontWeight='bold' color='gray.600'>
            No products available 😢 {" "}
            <Link to="/create">
              <Text color='blue.500' _hover={{ textDecoration: 'underline' }} as='span'>
                Create a new product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;
