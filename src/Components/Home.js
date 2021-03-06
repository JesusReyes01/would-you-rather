import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Link, Redirect } from 'react-router-dom'



const Home = (props) => {
    const { votedIds, unVotedIds } = props
    const [hasVoted, setToggle] = useState('false')

    if(!props.authedUser) {
        alert('Please sign in.')
        return <Redirect to='/' />
    }

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
                    unVotedIds.length !== 0 ?
                    unVotedIds.map((id)=>(
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))
                    :
                    <>
                        <h2>No Unanswered Questions</h2>
                        <Link 
                            to='/add'
                            className='create-question-link'
                            ><h3>Create New Question</h3></Link>
                    </>
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