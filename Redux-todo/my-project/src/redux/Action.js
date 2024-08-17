
export const ADD_TODO=(data)=>{
    return {
        type: 'ADD_TODO',
        payload: data
    }
}


export const DELETE_TODO=(data)=>{
    return {
        type: 'DELETE_TODO',
        payload: data
    }
}
