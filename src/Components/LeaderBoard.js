import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardUser from './LeaderBoardUser'
import { Redirect } from 'react-router-dom'


const LeaderBoard= (props) => {
    const { users } = props

    if(!props.authedUser) {
        alert('Please sign in.')
        return <Redirect to='/' />
    }
    
    return(
        <ul className='leaderboard-list'>
            {users.map( (userId) => (
                <LeaderBoardUser id={userId} key={userId}/>
            ))}
            
        </ul>
    )
}

const mapStateToProps = ({ users, authedUser }) => ({
    authedUser,
    users: Object.keys(users)
        .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length))
})

export default connect(mapStateToProps)(LeaderBoard)