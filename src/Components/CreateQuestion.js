import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../Actions/shared'
import { Redirect } from 'react-router-dom'



const CreateQuestion = (props) => {

    const [state, setState] = useState({
        questionOne: '',
        questionTwo: '',
        toHome: false
    })

    useEffect(() => {
        const { authedUser, history } = props
        if(!authedUser){
            history.push('/')
            alert('Please sign in')
        }
    },[]);

    const handleInput = e => {
        const { name, value } = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id } = props
        const { questionOne, questionTwo} = state
        dispatch(handleAddQuestion(questionOne, questionTwo))

        setState(() => ({
            questionOne: '',
            questionTwo: '',
            toHome: id ? false : true,
        }))
    }

    if(state.toHome === true){
        return <Redirect to='/home' />
    }

    return(
        <div className='container center'>
            <div className='create-question-header'>
                <h2>Create New Question</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='create-question-form'>
                    <p>Complete the question:</p>
                    <h3>Would you rather ...</h3>
                    <input 
                        type="text"
                        placeholder='Enter Option One Text Here'
                        value={state.questionOne}
                        onChange={handleInput}
                        name='questionOne'
                        className='question-input'
                    />
                    <div className='divider'>
                        <span className='line'></span>
                        <span>OR</span>
                        <span className='line'></span>
                    </div>
                    <input
                        type="text"
                        placeholder='Enter Option Two Text Here' 
                        value={state.questionTwo} 
                        onChange={handleInput}
                        name='questionTwo'
                        className='question-input'
                    />
                    <button 
                        className='btn'
                        type='submit'
                        disabled={state.questionOne === '' || state.questionTwo === ''}
                            >Submit</button>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = ({ authedUser }) => ({
    authedUser
})
export default connect(mapStateToProps)(CreateQuestion)