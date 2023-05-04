
import React, { useEffect, useState } from "react";
import Card from './CarCard';
import './../Components/Style/cards.css';

export default function Cards() {
  let [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://car-rental-7mti.onrender.com/cars/")
      .then(res => res.json())
      .then(res => setdata(res));
  }, [])


  return <>
  <div id="carCard">
  {
  data.map((d,i)=>{
    return <div key={i} id="cardBody">
             <Card  image={d.image} name={d.name} milage={d.milage} />
           </div>
})
}
</div>
  </>
}
