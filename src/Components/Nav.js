import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../Actions/authedUser'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = (props) => {
    const { authedUser, users, dispatch, history } = props

    const handleLogout = e => {
        dispatch(logoutUser())
        history.push('/')
    }
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/new'}>New Question</NavLink>
                </li>
                <li>
                <NavLink to={'/leaderboard'}>Leader Board</NavLink>
                </li>
                {authedUser ? 
                <>
                    <li>
                    Hello, {users[authedUser].name}
                    </li>
                    <li>
                        <img
                            src={users[authedUser].avatarURL}
                            alt={`${users[authedUser].name} image`}
                            className='nav-image'
                            />
                    </li>
                    <li onClick={handleLogout}>
                        Logout
                    </li>
                </>
                : null 
                } 
                
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users
})

export default withRouter(connect(mapStateToProps)(Nav))