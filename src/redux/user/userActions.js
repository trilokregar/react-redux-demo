import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        error: error
    }
}

// for API CALLS after installing redux-thunk in terminal and imported in "store.js" //
// this 'fectuser' function can have another function in its RETURN //
// that return fxn will have "dispatch" as its attributes //
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)                             // for initial loading "true" //   
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {                                // if fetch successfull //
                const users = response.data
                dispatch(fetchUserSuccess(users))               // success fetch shows "list of users" //
            })
            .catch(error => {                                   // if fetch fails //
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))            // failure "error message" //
            })
    }
}