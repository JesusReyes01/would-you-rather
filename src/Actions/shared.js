import { getInitialData } from '../Utils/api'
import { receiveUsers } from '../Actions/users'
import { receiveQuestions } from '../Actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())

            })
    }
}