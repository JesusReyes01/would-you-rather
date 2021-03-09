import React, { useState } from 'react'
import { connect } from 'react-redux'
import {formatDate, formatQuestion} from '../Utils/helpers'


const QuestionPage = (props) => {
    const [option, setOption] = useState()

    const { question } = props
    if (question === null) {
        return <p>This tweet doesn't exist</p>
    }

    const { avatar, name, optionOneText, optionTwoText} = question

    const handleChange = (e) => {
        setOption(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
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
                <form className='poll' onSubmit={handleSubmit} >
                    <p><strong>Would You Rather...</strong></p>
                    <label className='radio'>
                        <input type='radio' name='option' value="optionOne" onChange={handleChange}/> 
                        {optionOneText}</label>
                    <label className='radio'>
                        <input type='radio' name='option' value="optionTwo" onChange={handleChange}/>
                        {optionTwoText}</label>
                    <button 
                        className='poll-button' 
                        type='button'
                        disabled={option !== 'optionOne' || option !== 'optionTwo'}>Submit</button>
                </form>
            </div>
        </div>
    )
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