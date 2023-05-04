import React from 'react'
import { list2 } from './imagenes.js'
import './style.css'
import {FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Card({Card}) {
const data = list2





  return (
    
   
      
    <ul className='card-container'>
      {data.map((data) => (


        <li className='card-img'>
          
           <img  className='img' src= {data.imgSrc[0] }  alt="images" />
           
            <div className='card-title-rating'>

                  <span className='b'>{data.title}</span>
                  <span className=' rating'> <FaStar />{data.rating}</span>
                    
              </div>

             <div className='price'>

                <span className='opacity-70'>{data.desc}</span>
                <span className='b '>{data.price}$ <small className='weight'>Night</small> </span>

            </div>
        </li>
        
      ))}
    </ul>
   
  )
}


