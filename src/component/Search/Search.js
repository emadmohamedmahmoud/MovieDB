import React, { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../component/Card/Card';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../../Network/AxiosInstancs';

function SearchMovie(props) {
  const [searchValue,setSearchValue]= useState('')
  console.log(searchValue)
  // const handleSearch= async (e)=>{
  //   e.preventDefault();
  //   return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a642b234a88b2fc4a5efdf425ca2b711&query=${searchValue}`)
  //   .then((data)=>setSearchValue(data.data))
  //   .catch((err)=>console.log(err))
  // }
  const [movieData, setmovieData ] = useState([])
  useEffect(()=>{
    AxiosInstance.get(`search/movie?api_key=a642b234a88b2fc4a5efdf425ca2b711&query=${searchValue}`)
    .then((data)=>setmovieData(data.data.results))
    .catch((err)=>console.log(err))
  },[searchValue])

  return (
    <>
    <Form className=" col-3 pt-3">
            <Form.Control
              type="search"
              placeholder="Movies Search"
              className="me-2"
              aria-label="Search"
              value={props.value}
              onChange={(e)=>setSearchValue(e.target.value)}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          {/* <input
            type="search"
            placeholder="Movies Search"
            className="me-2"
            aria-label="Search"
            value={props.value}
            onChange={(e)=>setSearchValue(e.target.value)}
          /> */}
          <div className='d-flex flex-wrap justify-content-between'>
        {movieData.filter((singleMovie)=>(singleMovie.title.toLowerCase().includes(searchValue))).map((singleMovie)=>(
        
          <Card movie={singleMovie}  key={singleMovie.id} to={`view/${singleMovie.id}`} name={singleMovie.title} desc={singleMovie.overview} 
          img={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}/>
        
          ))}
    </div>
          </>
          
  )
}



export default SearchMovie
