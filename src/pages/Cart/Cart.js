import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card/Card'

function Cart() {
  const Count=useSelector((state)=>state.Count)
  const Fav=useSelector((state)=>state.ArrayFav)
 
  return (
   
    <div className='d-flex flex-wrap justify-content-between'>
    {Fav.map((singleMovie,i)=>{
        return(
          <Card movie={singleMovie} index={i} key={singleMovie.id} to={`view/${singleMovie.id}`} name={singleMovie.title}
           desc={singleMovie.overview} img={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}/>
           
        )
    })}
    </div>

  )
}

export default Cart