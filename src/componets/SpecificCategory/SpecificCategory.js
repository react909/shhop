import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SpecificCategory() {
   const[tovar,setTovar]=useState([])
   const link= useParams();
   
   useEffect(()=>{
    axios(`https://fakestoreapi.com/products/category/${link.name}`)
   .then(({data})=>setTovar(data))
},[])
        
   


    return (
    <div>
          {tovar.map((el, idx) => {
            return (
              <div class="col s12 m4 main__col">
                <div class="card main__card">
                  <div className="photo">
                    <img className="main__img" src={el.image} alt="photo" />
                  </div>
                  <div className="main__text">
                    <p className="main__name"> Наимениованиа товара:  <span>{el.title.length>38  ? `${el.title.substr(0,38)}...` : el.title}</span> </p>
                  </div>
                  <p className="main__name"> Цена: <span>{el.price}$</span></p>

                  <div className='main__btns'>
                    <button className="btn">Подробнее</button>
                    <button className="btn">Купить</button>
                  </div>
                </div>

              </div>
            )
          })}
    </div>
  )
}

export default SpecificCategory
