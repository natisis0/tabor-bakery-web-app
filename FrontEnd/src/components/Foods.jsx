import { useEffect, useState } from "react";
import FoodsItem from "./FoodsItem";

export default () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function fetchFoods() {
      const response = await fetch("http://localhost:3000/food");
      if(!response.ok){
        //...handle error
      }
      const foods = await response.json();
      setFoods(foods);
    }
    fetchFoods();
  }, []);

  return (
    <ul className="foods">
      {foods.map((food) => (
        <FoodsItem key={food.id} food={food} />
      ))}
    </ul>
  );
};
