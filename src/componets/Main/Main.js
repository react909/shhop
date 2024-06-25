import axios from 'axios'
import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom'



function Main({ products, setProducts }) {
  useEffect(() => {
    axios(`https://fakestoreapi.com/products`)
      .then(({ data }) => setProducts(data))
  }, [])

    const buyCart = (obj)=>{
 
      // const idx = cart



    }
      
   

  return (

    <div className='Main'>
      <div className='container'>
        <div class="row">

          {products.map((el, idx) => {
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
                  
                  <Link to={`/Podrobno/${el.id}`}><button className='btn main__btn'>Подробнее</button></Link>
                  
                    <button className='btn main__btn'>Купить</button>
                  </div>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </div>

  )
}

export default Main
