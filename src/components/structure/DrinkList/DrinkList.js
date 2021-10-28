import React, { useEffect, useState } from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './DrinkList.css';
import Api from "../../../api/api";

const DrinkList = () => {
  const [drink, setDrink] = useState([]);

  useEffect(()=> {
    getDrink();
  }, [])
  
  const getDrink = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setDrink(data);
  }
  return (
    <main className='container'>
      <div className="list">
        {drink.map((drink, index) => (
          <DrinkCard data={drink} key={index}/>
        ))}
      </div>
    </main>
  )
}

export default DrinkList
