import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Card from '../../component/Card/Card';
import SearchMovie from '../../component/Search/Search';
import { AxiosInstance } from '../../Network/AxiosInstancs';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesList } from '../../Store/Actions/MovieListAction';
import Loader from '../../component/Loader/Loader';



function Movies() {

    const [movieData, setmovieData ] = useState([])
    const [currentPage,setcurrentPage]= useState(1)
    const isLoading = useSelector((state)=>state.isLoading)
  //   const dispacth=useDispatch()
  //   const movieData =useSelector((state)=>state.MoviesListR.MoviesList)
  //   useEffect (()=>{
  //     dispacth(MoviesList())
  // },[currentPage])
    
    useEffect (()=>{
        AxiosInstance.get(`movie/popular?api_key=a642b234a88b2fc4a5efdf425ca2b711&page=${currentPage}`)
        .then((data)=>setmovieData(data.data.results))
        .catch((err)=>console.log(err))
    },[currentPage])
    
  return (
    <>
    <div className='d-flex flex-wrap justify-content-between '>
      <h1 className='p-3 text-light col-9'>Movies</h1>
    <SearchMovie />
    </div>
    <div className='d-flex flex-wrap justify-content-between'>
      {isLoading ? <Loader/> : movieData.map((singleMovie,i)=>{
        return(
          <Card movie={singleMovie} index={i}  key={singleMovie.id} to={`view/${singleMovie.id}`} name={singleMovie.title}
           desc={singleMovie.overview} img={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}/>
        )
    })}
    </div>
    <nav aria-label="Page navigation example ">
    <ul className="pagination justify-content-center m-3">
    <li className="page-item" ><button className='btn btn-info m-3' onClick={() => setcurrentPage((currentPage) => currentPage - 1)}>Previous</button></li>
    <li className="page-item" ><button className='btn btn-info m-3' onClick={() => setcurrentPage((currentPage) => currentPage + 1)}>Next</button></li>
    </ul>
  </nav>
  </>
    
  )
}

export default Movies