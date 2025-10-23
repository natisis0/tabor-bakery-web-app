import logo from "../assets/tabour.png";
import {useSelector} from 'react-redux'



export default () => {

  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <header>
      <div className="main-header">
        <img src={logo} alt="Tabour Bakery Logo" />
        <h1>Tabour Bakery </h1>
      </div>

      <button> Cart({totalQuantity})</button>
    </header>
  );
};
