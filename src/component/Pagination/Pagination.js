// import React, { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate';

// function Pagination() {
    
//     const [currentPage,setcurrentPage]= useState(0)
//     const [data,setData]= useState([])
//     useEffect (()=>{
//         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a642b234a88b2fc4a5efdf425ca2b711&page=${currentPage}`)
//         .then((data)=>setmovieData(data.data.results))
//         .catch((err)=>console.log(err))
//     },[currentPage])
//   return (
//     <ReactPaginate></ReactPaginate>
//   )
// }

// export default Pagination