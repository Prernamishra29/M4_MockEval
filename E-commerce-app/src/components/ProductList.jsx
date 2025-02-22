import React, {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Box,Image,Text,Button ,SimpleGrid,Spinner,Center}from '@chakra-ui/react';
import { fetchProducts,addToCart} from "../redux/action";

const ProductList= () => {
    const dispatch= useDispatch();
    const {products, loading, error }=  useSelector((state)=> state.product);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    };
    if (loading){
        return(
            <Center mt = {10}>
            <Spinner size="xl"/>
            </Center>
        );
    }
    if (error){
        return
            <Text color="red.500" >{error}</Text>;
 }

    return (
        <Box p ={5}> 
                <SimpleGrid columns={[1,2,3]} spacing={10}>
                {products.map((product)=>(
                <Box key ={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
                <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
                <Text mt={3} fontWeight="bold">{product.title}</Text>
                <Text>${product.price}</Text> 
                <Button mt= {3} colorScheme="teal" onClick={()=>handleAddToCart(product)}>Add to Cart
                </Button>
             </Box>
        ))}
        </SimpleGrid>        
        </Box>


    );
};
    export default ProductList;