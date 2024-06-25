import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Podrobno() {

  const [podrobno, sePodrobno] = useState({})

  const link = useParams()


  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${link.id}`)
      .then(({ data }) => sePodrobno(data))
  }, [])



  return (
    <div className='container'>
      <div class="row">
        <div class="col s12 m12">
          <div className='card podrobno__card'>
            <div className='podrobno__img'>
              <img className='img' src={podrobno.image}/>
             </div>
              <div className='podrobno__text'>
                  <p>намионаваниа: {podrobno.title}</p>
                  <p>котегориа: {podrobno.category}</p>
                  <p>описаниа: {podrobno.description}</p>
                  <p>цена:  {podrobno.price}</p>
                  <button className='btn'>Купить</button>
              </div>            
           </div>
        </div>
      </div>


    </div>
  )
}

export default Podrobno
