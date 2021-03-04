import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


const Home = (props) => {
    const [questionsToggle, setToggle] = useState('unanswered')

    const handleToggle = e => {
        const { id } = e.target
        setToggle(id)
    }

    return (
        <div className='container center'>
            <div className='home-header'>
                <div 
                    className={questionsToggle === 'unanswered' ? 'home-header-tab selected' : 'home-header-tab'}
                    onClick={handleToggle} 
                    id='unanswered'>
                    <span id='unanswered'>Unanswered Questions</span>
                </div>
                <div 
                    className={questionsToggle === 'answered' ? 'home-header-tab selected' : 'home-header-tab'}
                    onClick={handleToggle} 
                    id='answered'>
                    <span id='answered'>Answered Questions</span>
                </div>
            </div>
            <div className='home-questions'>
            {/* TODO: questions mapped */}
            <Question
                image={props.users['johndoe'].avatarURL}
                questionOptions={['be superman','be batman']}/>

            </div>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Home)