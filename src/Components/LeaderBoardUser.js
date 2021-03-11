import React from 'react'
import { connect } from 'react-redux'

const LeaderboardUser = (props) => {
    const { user } = props
    const { answers, avatarURL, name, questions} = user

    return( 
        <li className='container center flex leaderboard-item'>
            <div>
                <img
                    src={avatarURL}
                    alt={name}
                    className='leaderboard-image'
                />
            </div>
            <span className='vertical-line'></span>
            <div className='leaderboard-details'>
                <h3>{name}</h3>
                <div className='flex'>
                    <p>Answered questions</p>
                    <span>{Object.keys(answers).length}</span>
                </div>
                <div className='flex'>
                    <p>Created questions</p>
                    <span>{questions.length}</span>
                </div>
            </div>
            <span className='vertical-line'></span>
            
            <div className='score-total'>
                <div className='score-total-header'>
                    <p>Score</p>
                </div>
                <div className='total'>
                    <span className='total-circle'>{Object.keys(answers).length + questions.length}</span>
                </div>

            </div>
                
            
        </li>
    )
}

const mapStateToProps = ({ users, authedUser}, props) => {
    const { id } = props
    return{
    user: users[id],
    authedUser
    }
}

export default connect(mapStateToProps)(LeaderboardUser)