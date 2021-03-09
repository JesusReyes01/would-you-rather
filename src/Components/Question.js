import React from 'react'
import { connect } from 'react-redux'
import {formatDate, formatQuestion} from '../Utils/helpers'
import { Link, withRouter } from 'react-router-dom'


const Question = (props) => {
    const { question, id } = props
    if (question === null) {
        return <p>This tweet doesn't exist</p>
    }

    const handleClick = (e) => {
        e.preventDefault()
    }

    const { avatar, name, optionOneText} = question
    
    return(
        <div className='container center'>
            <div className='question-header'>
                <h4>{name} asks:</h4>
            </div>
            <div className='question-content'>
                <img
                    src={avatar}
                    alt='asker image'
                    className='question-image'
                />
                <span className='vertical-line'></span>
                <div className='poll-preview'>
                    <p><strong>Would you rather</strong></p>
                    <p className='question-preview'>...{optionOneText}...</p>
                    <Link 
                        to={`/question/${id}`}
                        className='poll-button' >View Poll
                    </Link>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]

    return {
        authedUser,
        rawQuestion: question,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Question)