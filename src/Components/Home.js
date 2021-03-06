import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


const Home = (props) => {
    const { votedIds, unVotedIds, questions } = props
    const [hasVoted, setToggle] = useState('false')

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
                    votedIds.map((id)=>(
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))
                :
                    unVotedIds.map((id)=>(
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
    questionIds.map( e => {
        if(questions[e].optionOne.votes.includes(authedUser)){
            votedIds.push(e)
        }
        else if(questions[e].optionTwo.votes.includes(authedUser)){
            votedIds.push(e)
        }
        else {
            unVotedIds.push(e)
        }
    })

    return{
    authedUser: authedUser ?? null,
    questions,
    votedIds,
    unVotedIds
    }
}

export default connect(mapStateToProps)(Home)