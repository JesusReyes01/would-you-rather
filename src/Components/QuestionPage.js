import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../Utils/helpers'
import Unanswered from './Unanwered'
import Results from './Results'

const QuestionPage = (props) => {
    const { id, question } = props
    useEffect(() => {
        const { history } = props
        if(question === null){
            history.push('/')
            alert('Please sign in')
        }
    },[]);

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