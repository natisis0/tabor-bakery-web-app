import {useSelector,useDispatch} from 'react-redux'
import { storeActions } from '../store/CartStore';
export default ({ food }) => {
    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch(storeActions.addToCart({food}))
    }
  return (
    <li className="food-item">
      <article>
        <img src={`http://localhost:3000/${food.image}`} alt={food.name} />
        <div>
          <h3 className="food-name">{food.name}</h3>
          <p className="food-price">${food.price}</p>
          <p className="food-description">{food.description}</p>
        </div>
        <p className="food-actions">
          <button onClick={addToCartHandler}>Add to Cart </button>
        </p>
      </article>
    </li>
  );
};
