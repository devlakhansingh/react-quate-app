const QuoteReducer =(state,action)=>{
switch (action.type) {
    
    case "get_data":
        return{
            ...state,
            quotes: action.payload
        }
    

    default:
    return state
}
}
export default QuoteReducer