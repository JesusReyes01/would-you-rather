import { showLoading, hideLoading } from 'react-redux-loading' 
import { saveUser } from '../Utils/api'
export const RECEIVE_USERS  = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const ADD_USER = 'ADD_USER'


export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion (question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}

export function saveUserAnswer ({ qid, authedUser, answer }) {
    return {
        type: SAVE_USER_ANSWER,
        qid,
        authedUser,
        answer,
    }
}

export function addUser (user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser ({first, last, imageURL}) {
    return (dispatch) => {
        dispatch(showLoading())

        return saveUser({
            first,
            last, 
            imageURL,
        })
            .then((user) => {
                dispatch(addUser(user))
                dispatch(hideLoading())
            })
    }
}