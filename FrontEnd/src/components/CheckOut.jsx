import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import { progressActions } from "../store/CartStore";

export default () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const showCheckout = useSelector((state) => state.progress.showCheckoutIs);
  const dispatch= useDispatch()
  
  function handleCloseCheckout() {
    dispatch(progressActions.hideCheckout());
  }

  return (
    <Modal open={showCheckout === "checkout"} close={showCheckout === ""}>
      <h2>Checkout</h2>
      <h4>Total Amount:${cartTotalAmount}</h4>
      <form className="form">
        <Input id="name" label="Your Name" type="text" />
        <Input id="address" label="Address" type="text" />
        <Input id="email" label="Email" type="email" />
        <Input id="phone" label="Phone Number" type="tel" />

        <div className="form-actions">
          <button onClick={handleCloseCheckout} className="cart-actions-close" type="button">
            Discard
          </button>
          <button className="cart-actions-checkout" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
