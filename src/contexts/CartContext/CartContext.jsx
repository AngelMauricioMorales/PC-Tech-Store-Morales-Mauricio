import { useState, createContext, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const isInCart = newProduct => cartList.findIndex(item => item.id === newProduct.id);

    const onAddToCart = newProduct => {
        const index = isInCart(newProduct);

        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, newProduct]);
        };
    };

    const amountQuantity = () => cartList.reduce((amount, product) => amount += product.quantity, 0);

    const totalPrice = () => cartList.reduce((price, product) => price += (product.quantity * product.price), 0);

    const removeItem = productID => setCartList(cartList.filter(product => product.id !== productID));

    const clearCart = () => setCartList([]);

    return <CartContext.Provider value={
        {
            cartList,
            onAddToCart,
            removeItem,
            clearCart,
            amountQuantity,
            totalPrice
        }
    }
    >
        {children}
    </CartContext.Provider>
};

export default CartContextProvider;
