export default function(state={},action){

    switch (action.type){
        case 'GET_USERS_ALL':
            return{...state, usersList:action.payload};
        default:
            return state;
    }
}