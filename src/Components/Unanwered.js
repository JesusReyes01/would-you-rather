import React, { useState } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../Utils/helpers'
import { withRouter } from 'react-router-dom'
import { handleSaveAnswer } from '../Actions/shared'

const Unanswered = (props) => {
    const [option, setOption] = useState()

    const { question, id, history } = props
    if (question === null) {
        return <p>This tweet doesn't exist</p>
    }

    const { avatar, name, optionOneText, optionTwoText} = question

    const handleChange = (e) => {
        setOption(e.target.value)
    }
    // const toResult = (e, id) => {
    //     e.preventDefault()
    //     history.push(`/results/${id}`)
    // } 
    const handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = props
        dispatch(handleSaveAnswer(id, option))
        setOption('')
        history.push(`/results/${id}`)
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
                        type='submit'
                        // disabled={option !== 'optionOne' || option !== 'optionTwo'} 
                        // onClick={(e) => toResult(e, id)}
                        >Submit</button>
                </form>
            </div>
        </div>
    )
}

const  mapStateToProps = ({authedUser, users, questions}, { id }) => {
    // const { id } = props.match.params
    const question = questions[id]

    return {
        id,
        rawQuestion: question,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Unanswered))