import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import { progressActions, storeActions } from "../store/CartStore";
import { useActionState, useState } from "react";

const URL =
  "https://tabor-bakery-web-app-server.onrender.com/order" ||
  "http://localhost:3000/order";


export default () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const showCheckout = useSelector((state) => state.progress.showCheckoutIs);
  const showSuccess = useSelector((state) => state.progress.showSuccessIs);

  const dispatch = useDispatch();

  function handleCloseCheckout() {
    dispatch(progressActions.hideCheckout());
    dispatch(progressActions.hideCart());
  }
  function handleShowSuccess() {
    dispatch(progressActions.showSuccess());
  }
  function handleCloseSuccess() {
    dispatch(progressActions.hideSuccess());
    dispatch(progressActions.hideCart());
    dispatch(storeActions.clearCart());
  }

  const [error, setError] = useState();
  const [formState, formAction, isSending] = useActionState(handleSubmit, null);

  async function handleSubmit(prev, formData) {
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orders: {
            orderedItems: cartItems,
            user: data,
          },
        }),
      });
      if (response.ok) {
        dispatch(progressActions.showSuccess());
        dispatch(progressActions.hideCheckout());
      }
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Order not processed");
      }
    } catch (error) {
      console.log("frontend caught error:", error);
      setError(error.message || "An Error Occured");
    }
  }

  return (
    <>
      <Modal open={showCheckout === "checkout"} close={showCheckout === ""}>
        <h2>Checkout</h2>
        {error && <p style={{ color: "red" }}>An error occurred: {error}</p>}
        <h4>Total Amount:ETB {cartTotalAmount}</h4>
        <form className="form" action={formAction}>
          <Input id="name" label="Your Name" type="text" />
          <Input id="address" label="Address" type="text" />
          <Input id="email" label="Email" type="email" />
          <Input id="phone" label="Phone Number" type="tel" />

          <div className="form-actions">
            <button
              onClick={handleCloseCheckout}
              className="cart-actions-close"
              type="button"
              disabled={isSending}
            >
              Discard
            </button>
            <button
              className="cart-actions-checkout"
              type="submit"
              disabled={isSending}
              onClick={handleShowSuccess}
            >
              {isSending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal>

      <Modal open={showSuccess === "success"} close={showSuccess === ""}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <div className="form-actions">
          <button
            className="cart-actions-checkout"
            onClick={handleCloseSuccess}
          >
            Okay
          </button>
        </div>
      </Modal>
    </>
  );
};
