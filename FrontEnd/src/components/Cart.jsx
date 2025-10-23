import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import Modal from "./UI/Modal";
import { progressActions, storeActions } from "../store/CartStore";



export default () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const showCart = useSelector((state) => state.progress.showCartIs);

  const dispatch = useDispatch();
 

  function handleCloseCart() {
    dispatch(progressActions.hideCart());
  }

  function handleAddItem(item) {
    dispatch(storeActions.addToCart(item));
  }
  function handleRemoveItem(item) {
    dispatch(storeActions.removeFromCart(item));
  }
  function handleCheckout() {
   dispatch(progressActions.showCheckout())
   console.log("checkout clicked")

  }

  return (
    <Modal open={showCart === "show"} close={showCart === ""}>
      <h3>Your Cart</h3>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <CartList
            key={item.id}
            item={item}
            add={() => handleAddItem(item)}
            remove={() => handleRemoveItem(item)}
          />
        ))}
      </ul>
      <div className="cart-total-amount">
        Total : <span className="amount-span">${cartTotalAmount}</span>
      </div>
      <div className="cart-actions">
        <button className="cart-actions-close" onClick={handleCloseCart}>
          Close
        </button>
        <button className="cart-actions-checkout" onClick={handleCheckout}>Checkout</button>
      </div>
    </Modal>
  );
};
