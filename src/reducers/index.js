export default(state,action)=>{
    console.log('actions dispatched when clicked btn',action);
    console.log(typeof(state.i_have))
    switch(action.type){
        case "DEPOSIT":
            state.i_have= state.i_have+ parseInt(action.amt);
            return{
                ...state
            }
        case "WITHDRAW":
        console.log("Fuck");
            state.i_have= state.i_have - parseInt(action.amt);
            return{
                ...state
            }
        default: 
            return state

    }
    
    // return state;
}