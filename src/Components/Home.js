import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


const Home = (props) => {
    const [questionsToggle, setToggle] = useState('unanswered')

    useEffect(() => {
        if(!props.authedUser){
            props.history.push('/')
        }
    },[]);

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
            <ul className='home-questions'>
                {props.questionIds.map((id)=>(
                    <li key={id}>
                        <Question id={id}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

const mapStateToProps = ({ questions, authedUser }) => ({
    authedUser: authedUser ?? null,
    questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp -  questions[a].timestamp)
})

export default connect(mapStateToProps)(Home)