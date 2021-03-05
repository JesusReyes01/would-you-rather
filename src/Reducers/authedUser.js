import { SET_AUTHED_USER } from '../Actions/authedUser'
import { LOGOUT_USER } from '../Actions/authedUser'

export default function users (state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return action.id
        case LOGOUT_USER :
            return action.payload
        default :
            return state
    }
}