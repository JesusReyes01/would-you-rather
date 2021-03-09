import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Leaderboard = (props) => {
    const { user } = props
    const { answers, avatarURL, name, questions} = user

    useEffect(() => {
        if(!props.authedUser){
            props.history.push('/')
        }
    },[]);

    return( 
        <div className='container center flex'>
            <div>
                <img
                    src={avatarURL}
                    alt='asker image'
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
                
            
        </div>
    )
}

const mapStateToProps = ({ users, authedUser}) => ({
    user: users['johndoe'],
    authedUser
})

export default connect(mapStateToProps)(Leaderboard)