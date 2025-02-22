import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button, SimpleGrid, Center, Spinner } from '@chakra-ui/react';
import { removeFromCart,updateQunatity } from '../redux/action'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.cart);

    const totalPrice = items.reduce((acc,item) => state.cart);

    const handleQunatityXhange = (id,quantity) =>{
        if (quantity > 0 ){
            dispatch(updateQunatity(id,Number(quantity)));
        }
    };
    const handleRemove= (id) =>{
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () =>{
   navigate('/checkout');
    };

    if(items.length === 0){
        return<Text p = {5}>Your cart is empty" </Text>;
}

return (
    <Box p={5}>
        <VStack spacing = {4} aligb= "stretch">
            {items.map((item) => (
                <Box key={item.id} p={3} borderWidth="1px" borderRadius="lg">
                <HStack justifyContent="space-between">
                <Text fontWeight={bold}>{item.title}</Text>
                <Text>${item.price}</Text>
                </HStack>
                <HStack mt={2}>
                    <Text>Quantity:</Text>
                    <Input type="number" value={item.quantity} onChange={(e) => handleQunatityXhange(item.id,e.target.value)} />
                    <Button colorScheme="red" onClick={() => handleRemove(item.id)}>Remove</Button>
                </HStack>
                </Box>
            ))}
        </VStack>
        <Divider my ={4}/>
        <Text fontSize="xl">Total Price: ${totalPrice}</Text>
        <Button mt={3} colorScheme="teal" onClick={handleCheckout}>Checkout</Button>
    </Box>
);
};
export default Cart;