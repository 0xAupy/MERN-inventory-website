import React, { useState } from 'react';
import { Button, Container, useColorMode, useColorModeValue, VStack, Heading, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useProductStore } from '@/store/product';
import { use } from 'react';
import { useToast } from '@chakra-ui/react';


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    }

  };

  return (
    <Container maxW={"container.sm"} pb ={40}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create a new product
        </Heading>
        <Box 
          w={"full"} 
          bg={useColorModeValue("white", "gray.800")}
          p={6} 
          rounded={"lg"} 
          shadow={"md"}
        >
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Product Name</FormLabel>
              <Input 
                placeholder='Enter product name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Product Price</FormLabel>
              <Input 
                placeholder='Enter product price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Product Image</FormLabel>
              <Input
                placeholder='Enter product image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </FormControl>
            <Button colorScheme='purple' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
