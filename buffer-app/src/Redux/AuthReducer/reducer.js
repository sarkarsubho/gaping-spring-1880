

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

const reducer = (state=initialState,action)=>{

    const {type,payload }= action;
    switch(type){
        default:
            return state;
    }
}
export {reducer}