import React from 'react';
import { Link } from 'react-router-dom';
import './DrinkCard.css';
import '../../structure/DrinkList/DrinkList';


const DrinkCard = (props) => {
  const drink = props.data;
  return (
    <main className='cards'>
      <section className="card contact">

          <div className="img">
            <img src={drink.image}/>
          </div>
          

          <h3>{drink.name}</h3>
          <h4>Priority: {drink.priority}</h4>

          <Link to={`/view/${drink._id}`} ><button className="open" type="submit">Open</button>
          </Link>
 
      </section>
</main>

  );
};

export default DrinkCard;
