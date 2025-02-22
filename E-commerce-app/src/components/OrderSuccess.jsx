import React from "react";
import {Box,Text,Button } from '@chakra-ui/react';
import{link} from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <Box p={5} textAlign={"center"}>
        <Text fontSize={"xl"}>Order Placed Successfully</Text>
        <Button as ={Link} to ="/" colorScheme="teal" mt={5}>Go to Home</Button>
        </Box>
    );
};
export default OrderSuccess;