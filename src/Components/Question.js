import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion} from '../Utils/helpers'
import { Link } from 'react-router-dom'
import defaultImage from '../Images/default-image.png'



const Question = (props) => {
    const { question, id } = props

    const { avatar, name, optionOneText} = question
    
    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }
    return(
        <div className='container center'>
            <div className='question-header'>
                <h4>{name} asks:</h4>
            </div>
            <div className='question-content'>
                <img
                    src={avatar}
                    alt={name}
                    onError={addDefaultImage}
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