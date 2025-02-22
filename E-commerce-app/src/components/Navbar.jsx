import React from "react";
import {Box,Text,Badge,Flex,Link, Center} from '@chakra-ui/react';
import{Link as RouterLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const {items} = useSelector((state) => state.cart);
    const totalItems = items.reduce((acc,item) => acc + item.quantity,0);

    return(
        <Flex as = "nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems={Center}>\
            <Box>
            <Link as= {RouterLink} to="/" fontSize="xl" fontWeight="bold">E-commerce App</Link>
            </Box>
            <Flex alignItems="center">
            <Link as= {RouterLink} to="/" mr={4}>Products</Link>
            <Link as= {RouterLink} to="/cart" mr={4}>Cart {totalItems >0 && (
                <Badge ml={1} colorScheme="red" borderRadius="full">{totalItems}</Badge>
            )}</Link>
            </Flex>
     </Flex>
    );
};
export default Navbar;