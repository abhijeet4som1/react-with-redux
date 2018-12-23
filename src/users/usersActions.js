import {users} from './mock-data';

const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const DELETE_USER = 'DELETE_USER';

const loadUserData = () => {
    return{
        type: LOAD_USER_SUCCESS,
        users: users
    }
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