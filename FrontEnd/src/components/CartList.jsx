import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../store/CartStore";

export default ({ item, add, remove }) => {
  return (
    <li className="cart-item">
      <div>
        {item.name} x {item.quantity} - ${item.price * item.quantity}
      </div>

      <div className="cart-item-actions">
        <button onClick={remove} >-</button>
        <span>{item.quantity}</span>
        <button onClick={add}>+</button>
      </div>
    </li>
  );
};
// cake x 2 - $20
