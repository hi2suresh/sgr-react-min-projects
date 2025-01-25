import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
function Meals() {
  const [items, setItems] = useState([]);
  const itemsLists = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);
  return <div className="items-container">{itemsLists}</div>;
}
export default Meals;
