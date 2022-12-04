import CartItem from "../CartItem/CartItem";

function CartList({cartList}) {
    return  cartList.map(product => <CartItem key={product.id} product={product} />);
};

export default CartList;
