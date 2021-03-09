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
        <div>
            {users.map( userId => (
            <LeaderBoardUser id={userId}/>
            ))}
        </div>
    )
}

const mapStateToProps = ({ users, authedUser }) => ({
    users: Object.keys(users),
    authedUser
})

export default connect(mapStateToProps)(LeaderBoard)