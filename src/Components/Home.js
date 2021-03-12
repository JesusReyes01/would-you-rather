import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


const Home = (props) => {
    const { votedIds, unVotedIds } = props
    const [hasVoted, setToggle] = useState('false')

    useEffect(() => {
        const { authedUser, history } = props
        if(!authedUser){
            history.push('/')
            alert('Please sign in')
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
                    className={hasVoted === 'false' ? 'home-header-tab selected' : 'home-header-tab'}
                    onClick={handleToggle} 
                    id='false'>
                    <span id='false'>Unanswered Questions</span>
                </div>
                <div 
                    className={hasVoted === 'true' ? 'home-header-tab selected' : 'home-header-tab'}
                    onClick={handleToggle} 
                    id='true'>
                    <span id='true'>Answered Questions</span>
                </div>
            </div>
            <ul className='home-questions'>
                {hasVoted === 'false' ?
                    unVotedIds.map((id)=>(
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))
                :
                    votedIds.map((id)=>(
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

const mapStateToProps = ({ questions, authedUser }) => {
    const questionIds = Object.keys(questions)
        .sort((a,b) => questions[b].timestamp -  questions[a].timestamp)
    const votedIds = []
    const unVotedIds = []

    for( let i = 0; i < questionIds.length; i++){
        if(questions[questionIds[i]].optionOne.votes.includes(authedUser)){
            votedIds.push(questionIds[i])
        }
        else if(questions[questionIds[i]].optionTwo.votes.includes(authedUser)){
            votedIds.push(questionIds[i])
        }
        else {
            unVotedIds.push(questionIds[i])
        }
    }

    return{
    authedUser: authedUser ?? null,
    questions,
    votedIds,
    unVotedIds
    }
}

export default connect(mapStateToProps)(Home)