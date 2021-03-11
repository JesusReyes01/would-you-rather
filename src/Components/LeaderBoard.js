import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LeaderBoardUser from './LeaderBoardUser'

const LeaderBoard= (props) => {
    const { users } = props

    useEffect(() => {
        const { authedUser, history } = props
        if(!authedUser){
            history.push('/')
        }
    },[]);
    
    return(
        <ul className='leaderboard-list'>
            {users.map( (userId) => (
                <LeaderBoardUser id={userId}/>
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