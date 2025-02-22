import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button, SimpleGrid, Center, Spinner, HStack } from '@chakra-ui/react';
import{placeOrder} from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.cart);

    const totalPrice = items.reduce((acc,item) => acc + item.price * item.quantity,0);
    const handlePlaceOrder = () =>{
        dispatch(placeOrder());
        navigate('/order-success');
    };
    return (
        <Box p={4}>
            <Text fontSize="xl" mb={4}>Checkout</Text>
            <VStack spacing={4} align="stretch">
            {items.map((item) => (
                <HStack key={item.id} p={3} borderWidth="1px" borderRadius="lg">
                <Text fontWeight="bold">{item.title}</Text>
                <Text>Qty: {item.quantity}</Text>
                </HStack>
            ))}
            </VStack>
            <Divider my={4} />
            <Text fontSize="xl">Total Price: ${totalPrice}</Text>
            <Button mt={5} colorScheme="teal" onClick={handlePlaceOrder}>Place Order</Button>
        </Box>
    );
};
export default Checkout;