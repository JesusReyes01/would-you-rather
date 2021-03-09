import { getInitialData, saveQuestionAnswer } from '../Utils/api'
import { receiveUsers, saveUserAnswer } from '../Actions/users'
import { receiveQuestions, saveAnswer } from '../Actions/questions'
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

export function handleSaveAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        dispatch(saveAnswer ({
            qid,
            authedUser,
            answer,
        }))
        dispatch(saveUserAnswer ({
            qid,
            authedUser,
            answer, 
        }))

        return saveQuestionAnswer({authedUser, qid, answer}) 
            .then(() => {
                dispatch(hideLoading())
            })
    }
}