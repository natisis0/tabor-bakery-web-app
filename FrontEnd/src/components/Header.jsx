import logo from "../assets/tabour.png";
import { useDispatch, useSelector } from "react-redux";
import { progressActions } from "../store/CartStore";

export default () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const showCart = useSelector((state) => state.progress.showCartIs);

  const dispatch = useDispatch()

  function showCartHandler() {
    dispatch(progressActions.showCart())
   console.log("clicked")
   console.log(showCart)

  }
  return (
    <header>
      <div className="main-header">
        <img src={logo} alt="Tabour Bakery Logo" />
        <h1>Tabour Bakery </h1>
      </div>

      <button onClick={showCartHandler}> Cart({totalQuantity})</button>
    </header>
  );
};
