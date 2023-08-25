import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react'; // Import ChakraLink
import Login from "../Pages/Login"
import Signup from '../Pages/CreateAccount';
const NavBar = () => {
  return (
    <Box bg="gray.700" color="white">
      <Flex justify="space-between" align="center" p={4}>
        <ChakraLink as={ReactRouterLink} to="/">
          <Image src="" alt="Bank App Logo" h={10} />
        </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/account" mx={2} _hover={{ textDecoration: 'none' }}>
            Account
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/currency" mx={2} _hover={{ textDecoration: 'none' }}>
            Currency Conversion
          </ChakraLink>
          <ChakraLink as={ReactRouterLink}  mx={2} _hover={{ textDecoration: 'none' }}>
          <Login />
          </ChakraLink>
          <ChakraLink as={ReactRouterLink}  mx={2} _hover={{ textDecoration: 'none' }}>
          <Signup />
          </ChakraLink>
      </Flex>
    </Box>
  );
};

export default NavBar;
