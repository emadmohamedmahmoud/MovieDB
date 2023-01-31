export const ADD=(payload)=>{
  return{
    type:"Counter",
    payload 
  }
}
export const ADDFav=(payload)=>{
  return{
    type:"ADDARRAY",
    payload
  }
}

export const ClickedStar=(payload)=>{
  return{
    type: "CLICKED",
    payload
  }
}

export const Loader=(payload)=>{
  return{
    type: "LOADER",
    payload
  }
}