import { useEffect, useState } from "react";
import FoodsItem from "./FoodsItem";

export default () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchFoods() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/food");
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || "failed to fetch data");
        }
        const foods = await response.json();
        setFoods(foods);
      } catch (error) {
        console.log("frontend caught error:", error)
        setError( error.message || "An Error Occured" );
      }
      setIsLoading(false);
    }
    fetchFoods();
  }, []);

  return (
    <ul className="foods">
      {isloading && <p>Loading Data...</p>}
      {error && <p>{error}</p>}
      {!isloading &&
        !error &&
        foods.map((food) => <FoodsItem key={food.id} food={food} />)}
    </ul>
  );
};
