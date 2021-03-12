import React, { useState } from 'react';
import { connect } from 'react-redux'
import appImg from '../Images/would-you-rather.png'
import UserOptions from './UserOptions'
import Select from "react-select";
import { setAuthedUser } from '../Actions/authedUser'
import { Link } from 'react-router-dom'


const SignIn = (props) => {
    const { usersId, users, dispatch, history } = props
    const [user, setUser] = useState('')

    const handleSelect = e => {
        setUser(e.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setAuthedUser(user))
        history.push('/home')
    }
    
    const options = usersId.map( e => ({
        value: users[e].id,
        label: users[e].name,
        icon: users[e].avatarURL,
    }))

    //Custom styling for 'options'
    const styles = {
        control: (css) => ({...css, height: '40px', fontSize: 14}),
        option: (css) => ({ ...css, alignItems: 'center', display: 'flex', height: 40, fontSize: 14})
    };

    return (
        <div>
            <div className='container center'>
                <div className='sign-in-header'>
                    <h3>Welcome to the Would You Rather App!</h3>
                    <span>Please sign in to continue</span>
                </div>
                <div>
                    <img src={appImg} alt="Would You Rather?" width="200" height="200"/>
                    <h2>Sign In</h2>
                    <form className='sign-in-form' onSubmit={handleSubmit}>
                        <Select 
                            placeholder='Select User'
                            options={options}
                            components={{ Option: UserOptions}}
                            styles={styles}
                            onChange={handleSelect}
                            
                        />
                        <button 
                            type='submit'
                            className='btn'
                            disabled={user === ''}>Sign In</button>
                    </form>
                </div>
            </div>
            <Link to='newPlayer'  className='center new-player'>
                <h4>Add new player!</h4>
            </Link>
        </div>
    );
}
function mapStateToProps ({ users }) {
    return {
        usersId: Object.keys(users).sort(),
        users    
    }
}
export default connect(mapStateToProps)(SignIn)
