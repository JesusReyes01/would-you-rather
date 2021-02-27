import React, { useState } from 'react';
import { connect } from 'react-redux'
import appImg from '../Images/would-you-rather.png'

const SignIn = (props) => {
    const { users } = props
    const [user, setUser] = useState()
    const handleSubmit = () => {

    }
    
    return (
        <div className='sign-in-box center'>
            <div className='sign-in-header'>
                <h3>Welcome to the Would You Rather App!</h3>
                <span>Please sign in to continue</span>
            </div>
            <div>
                <img src={appImg} alt="Would You Rather?" width="200" height="200"/>
                <h2>Sign In</h2>
                <form className='sign-in-form' onSubmit={handleSubmit}>
                    <select >

                    </select>
                    <button className='btn'>Sign In</button>
                </form>
            </div>
        </div>
    );
}
function mapStateToProps ({ users }) {

    return {
        usersA: Object.keys(users),
        users
        
    }
}
export default connect(mapStateToProps)(SignIn)