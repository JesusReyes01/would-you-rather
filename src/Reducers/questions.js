import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION} from '../Actions/questions'

export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                    ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                    : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_QUESTION :
            const { question } = action

            return {
                ...state,
                [question.id]: question,
            }
        default :
            return state
    }
}