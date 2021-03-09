import React from 'react'
import { connect } from 'react-redux'
import LeaderBoard from './LeaderBoard'

const LeaderBoardPage = (props) => {
    const { users } = props
    return(
        <div>
            LeaderPage
        </div>
    )
}

const mapStateToProps = ({ users, authedUser }) => ({
    users: Object.keys(users),
    authedUser
})

export default connect(mapStateToProps)(LeaderBoardPage)