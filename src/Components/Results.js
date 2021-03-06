import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../Utils/helpers'
import ProgressBar from './ProgressBar'
import defaultImage from '../Images/default-image.png'

const Results = (props) => {
    const { question, authedUser } = props
    if (question === null) {
        return (
            <div className='center'>
                <h1>Page Not Found</h1>
                <p>This question doesn't exist</p>
            </div>
        )
    }

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

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }

    return (
        <div className='container center'>
            <div className='question-header'>
                <h4>Asked by {name}</h4>
            </div>
            <div className='results-content'>
                <img
                    src={avatar}
                    alt={name}
                    onError={addDefaultImage}
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