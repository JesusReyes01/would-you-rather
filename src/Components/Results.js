import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../Utils/helpers'
import ProgressBar from './ProgressBar'

const Results = (props) => {
    const { question, authedUser } = props
    const { avatar, name, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes} = question
    const totalVotes = optionOneVotes.length + optionTwoVotes.length
    let votedFor = ''
    if(optionOneVotes.includes(authedUser)){
        votedFor = 'optionOne'
    }else{
        votedFor ='optionTwo'
    }

    let percentageOne = (optionOneVotes.length / totalVotes ) * 100
    let percentageTwo = (optionTwoVotes.length / totalVotes ) * 100

    return (
        <div className='container center'>
            <div className='question-header'>
                <h4>Asked by {name}</h4>
            </div>
            <div className='results-content'>
                <img
                    src={avatar}
                    alt={name}
                    className='results-image'
                />
                <span className='vertical-line'></span>
                <div className='results-questions'>
                    <p><strong>Results:</strong></p>
                    <div className={votedFor === 'optionOne' ? 'results-question voted-for' : 'results-question'}>
                        {votedFor === 'optionOne' ? 
                            <div className='badge'>
                                Your Vote
                            </div>: null}
                        <p>Would you rather {optionOneText}?</p>
                        <ProgressBar completed={percentageOne.toFixed(1)} />
                        <div className='vote-count'>
                            {optionOneVotes.length} out of {totalVotes} votes
                        </div>
                    </div>
                    
                    <div className={votedFor === 'optionTwo' ? 'results-question voted-for' : 'results-question'}>
                        {votedFor === 'optionTwo' ? 
                            <div className='badge'>
                                Your Vote
                            </div>: null}
                        <p>Would you rather {optionTwoText}?</p>
                        <ProgressBar completed={percentageTwo.toFixed(1)} />
                        <div className='vote-count'>
                            {optionTwoVotes.length} out of {totalVotes} votes
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

const  mapStateToProps = ({authedUser, users, questions}, props) => {
    const id = props.match ? props.match.params.id : props.id

    const question = questions[id]

    return {
        users,
        id,
        rawQuestion: question,
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Results)