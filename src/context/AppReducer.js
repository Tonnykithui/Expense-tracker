export default ( state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return{
                ...state,
                Transaction:[action.payload, ...state.Transaction]
            }

        case "DELETE_TRANSACTION":
            return{
                ...state,
                Transaction:state.Transaction.filter(item => item.id !== action.payload)
            }
    
        default:
            break;
    }
    
}