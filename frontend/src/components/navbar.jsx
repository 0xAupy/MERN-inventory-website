import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue, Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const HeroSection = () => (
  <Box
    position="relative"
    height="500px"
    backgroundImage="url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    backgroundSize="cover"
    backgroundPosition="center"
    mb={8}
  >
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.600"
    />
    <Container maxW="1140px" height="100%" position="relative">
      <Flex
        direction="column"
        height="100%"
        justifyContent="center"
        color="white"
        pl={8}
      >
        <Text
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          mb={2}
          textTransform="uppercase"
          bgGradient="linear(to-r, purple.500, blue.500)"
          bgClip="text"
        >
          Inventory Inn
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontFamily="cursive"
          mb={6}
        >
          A welcoming place for products
        </Text>
        <Button
          bgGradient="linear(to-r, purple.500, blue.500)"
          color="white"
          size="lg"
          width="fit-content"
          _hover={{
            transform: "translateY(-2px)",
            shadow: "lg",
          }}
        >
          EXPLORE NOW
        </Button>
      </Flex>
    </Container>
  </Box>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box
        position="sticky"
        top={0}
        zIndex={1000}
        bg={bgColor}
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
      >
        <Container maxW="1140px" px={4}>
          <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <Text
              fontSize={{ base: "22", sm: "28" }}
              fontWeight="black"
              textTransform="uppercase"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "0",
                width: "100%",
                height: "2px",
                background: "linear-gradient(to right, purple.500, blue.500)",
                transform: "scaleX(0)",
                transition: "transform 0.3s ease",
              }}
              _hover={{
                _after: {
                  transform: "scaleX(1)",
                },
              }}
              bgGradient="linear(to-r, purple.500, blue.500)"
              bgClip="text"
            >
              <Link to="/">Inventory Inn</Link>
            </Text>
            <HStack spacing={3} alignItems="center">
              <Button
                onClick={toggleColorMode}
                variant="ghost"
                _hover={{
                  transform: "rotate(180deg)",
                }}
                transition="all 0.3s"
              >
                {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <HeroSection />
      <Link to="/create">
        <IconButton
          icon={<AiOutlinePlusCircle fontSize="32" />}
          position="fixed"
          bottom="3rem"
          right="3rem"
          width="70px"
          height="70px"
          isRound
          bgGradient="linear(to-r, purple.500, blue.500)"
          color="white"
          _hover={{
            transform: "scale(1.1)",
            shadow: "lg",
          }}
          _active={{
            transform: "scale(0.95)",
          }}
          transition="all 0.2s"
          zIndex={1000}
          aria-label="Add product"
        />
      </Link>
    </>
  );
};

export default Navbar;