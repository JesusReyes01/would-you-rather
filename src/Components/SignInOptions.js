import React from 'react'
import { connect } from 'react-redux'

const SignInOptions = (props) => {
    const { user } = props
    const { id, name, avatarURL } = user
    return(
        <option value={id}>
            <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='sign-in-avatar'
                />
            {name}
            {/* <img 
                src={user.avatarURL}
                alt={user.name}/> */}
        </option>
    )
}

const mapStateToProps = ({ users }, { id }) => {
    const user = users[id]
    return{
        user
    }
} 

export default connect(mapStateToProps)(SignInOptions)