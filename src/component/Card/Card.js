import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../Store/AddFavCount';
import { ADDFav } from '../../Store/AddFavCount';
import { ClickedStar } from '../../Store/AddFavCount';

function Card(props) {
  const Count=useSelector((state)=>state.Count)
  const movieArr=useSelector((state)=>state.ArrayFav)
  const [isClicked, setisClicked ] = useState(false)
  // const isClicked=useSelector((state)=>state.Clicked)
  const dispatchCount= useDispatch()
  const dispatchArr= useDispatch()
  const dispacthClicked=useDispatch()
  const handleCount= (movie,index)=>{
    if(isClicked==false){
      setisClicked(true)
      dispatchCount(ADD(Count+1))
      // dispacthClicked(ClickedStar(true))
      dispatchArr(ADDFav(movie))
      //  return(console.log(movie))
    }else{
      dispatchCount(ADD(Count-1))
      setisClicked(false)
      // dispacthClicked(ClickedStar(false))
      movieArr.splice(index,1)
    }
    
  }

  return (
    <div className="card m-3 " style={{width: "22rem"}} >
            <img src={props.img} className="card-img-top  " />
            <div className="card-body">
                <h5 className="card-title"><Link className='text-decoration-none text-warning'  to={props.to}>{props.name}</Link> </h5>
                <p className="card-text">{props.desc}</p>
                {/* <div className='text-center'><Star onClick={()=>handleCount()} className={`${Count>=1?"text-danger":"text-warning"} image-container`}/></div> */}
                <div className='text-center'>{isClicked==true?<StarFill className='text-danger'onClick={()=>handleCount(props.movie)}/>
                :<Star className='image-container text-warning' onClick={()=>handleCount(props.movie,props.index)}/>}</div>

            </div>
        </div>
        // 'image-container text-warning`
  )
}

export default Card;