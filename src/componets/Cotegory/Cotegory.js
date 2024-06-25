import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Cotegory() {
  const [razdel, setRazdel] = useState([]);
  const link = useParams();

  
  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories")
    .then(({data})=>setRazdel(data)
    );
  }, []);

  return (
    <div className="container">
      <ul className='ul'>
        {razdel.map((el)=>{
          return (
             <>
              <Link  className='li' to={`/SpecificCategory/${el}`} ><button className='btn'>{el}</button></Link>
             </>
          )
        })
        
        }
        </ul>  
  

    
    </div>
  );
}

export default Cotegory;
