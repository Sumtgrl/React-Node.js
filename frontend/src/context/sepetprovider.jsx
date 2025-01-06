import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

export const SepetContext = createContext();

const SepetProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    );

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    const addToSepet = (product) => {
        setCartItems((prevItems) => [...prevItems, {...product, quantity: product.quantity ?  product.quantity : 2 }]);
    }

    const removeToSepet = (productId) => {
        const filteredSepetItems = cartItems.filter((cartItem)=> {return cartItem.id !== productId})
        setCartItems(filteredSepetItems);
    }

    return (
        <SepetContext.Provider value={{ cartItems, addToSepet,removeToSepet }}>
            {children}
        </SepetContext.Provider>
    )
}

export default SepetProvider

SepetProvider.propTypes = {
    children: PropTypes.node
}
