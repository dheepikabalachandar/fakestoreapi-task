const ProductCard = ({product, addToCart, cartItems}) => {
 const isIncart = cartItems.some ((item) => item.id === product.id );

    const handleAddToCart = ()  => {
        if(isIncart) {
            alert("Item is already added to the cart")
        } else {
            addToCart(product)
        }
    }

    return (
        <div className="border p-4 rounded-md">
            <img src = {product.image} alt ={product.title} className="h-40 mx-auto" />
            <h2 className="font-bold text-lg"> {product.title}</h2>
            <p className="text-gray-500"> ${product.price} </p>
            <button 
               onClick={handleAddToCart}
               className = {`mt-2 px-4 py-2 ${isIncart ? 'bg-gray-400' : 'bg-orange-500'} text-white)`}
               disabled = { isIncart} 
               >
                {isIncart ? 'In Cart': 'Add To Cart' }

               </button>
        </div>
    )
}

export default ProductCard