const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const DELETE_USER = 'DELETE_USER';

const fetchUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    });
}

/*const loadUserData = () => {
    return dispatch => {
        fetchUser().then(data => {
            dispatch({type: LOAD_USER_SUCCESS, users: data});
        })
    };
}*/

const loadUserData = () => {
    return async dispatch => {
        try{
            let data = await fetchUser();
            dispatch({type: LOAD_USER_SUCCESS, users: data});
        }catch(err){
            console.log(err);
        }
        
    };
}

const deleteUser = (userById) => {
    return {
        type: DELETE_USER,
        userId: userById
    }
}

export {
    LOAD_USER_SUCCESS,
    DELETE_USER,
    loadUserData,
    deleteUser
}