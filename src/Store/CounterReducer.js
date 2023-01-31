const IntialValues={
    Count:0,
    ArrayFav:[],
    Clicked: false,
    isLoading: false
}
export default function CounterReducer(state = IntialValues,action){
    switch(action.type){
        case "Counter":
            return{
                ...state,
                Count: action.payload
            }
// fav:[...state.fav,fav.push(action.payload)]
    case "ADDARRAY":
        return{
            ...state,
            ArrayFav: [...state.ArrayFav.push(action.payload)]
        }

    case "CLICKED":
        return{
            ...state,
            Clicked: action.payload
        }
    
    case "LOADER":
        return{
             ...state,
             isLoading: action.payload
        }
        default: 
            return state
    }
    

}