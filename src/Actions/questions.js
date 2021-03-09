export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function saveAnswer ({ qid, authedUser, answer }) {
    return {
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer

    }
}

