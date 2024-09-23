import './App.css';
import {useState} from "react";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const[cartItems, setCartItems] = useState([]);
  const[isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
    <div className="App">
       <Navbar cartCount = {cartItems.length} openCart = {openCart} />
       <ProductList addToCart = {addToCart} cartItems = {cartItems} />

        {isCartOpen && 
        <CartModal cartItems = {cartItems} 
        removeFromCart = {removeFromCart} 
        closeModal = {closeCart} />}

    </div>
  );
}

export default App;
