import {ChakraProvider} from '@chakra-ui/react';
import {Provide} from "react-redux";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App(){
  return(
   <ChakraProvider>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/order-success" element={<OrderSuccess/>}/>
      </Routes>
    </Router>
   </ChakraProvider>
  );
}
export default App;