import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION} from '../Actions/questions'

export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.tweets
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
        case SAVE_ANSWER :
            const { tweet } = action

            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [tweet.id]: tweet,
                ...replyingTo
            }
        default :
            return state
    }
}