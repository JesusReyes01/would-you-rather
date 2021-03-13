import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../Utils/helpers'
import Unanswered from './Unanswered'
import Results from './Results'

const QuestionPage = (props) => {
    const { id, question } = props
    if (question === null) {
        return (
            <div className='center'>
                <h1>Page Not Found</h1>
                <p>This question doesn't exist</p>
            </div>
        )
    }

    if ( question.hasVoted === false ) {
        return <Unanswered id = { id }/>
    }
    else {
        return <Results id = { id }/>
    }
}

const  mapStateToProps = ({authedUser, users, questions}, props) => {
    const { id } = props.match.params
    const question = questions[id]

    return {
        id,
        rawQuestion: question,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(QuestionPage)