const InitalValue ={
    MoviesList:[]
}

export default function MoviesReducer(state = InitalValue,action){
    switch(action.type){
        case "MOVIESLIST":
            return{
                ...state,
                MoviesList: action.payload
            }
            default:
                return state
    }
}