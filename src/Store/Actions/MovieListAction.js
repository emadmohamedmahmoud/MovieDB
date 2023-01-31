import { AxiosInstance } from "../../Network/AxiosInstancs"

export const MoviesList =()=> (dispacth)=>{
    return AxiosInstance.get(`movie/popular?api_key=a642b234a88b2fc4a5efdf425ca2b711`)
    .then((res)=>dispacth({
        type:"MOVIESLIST",
        payload: res.data.results
    })).catch((err)=>console.log(err))
}