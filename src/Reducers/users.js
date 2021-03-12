import { RECEIVE_USERS, ADD_USER_QUESTION, SAVE_USER_ANSWER, ADD_USER } from '../Actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION :
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
                
            }
        case SAVE_USER_ANSWER :
            const { qid, authedUser, answer} = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                    }
                }
            }
        case ADD_USER :
            const { user } = action
            return {
                ...state,
                [user.id]: user
            }
            
        default :
            return state
    }
}