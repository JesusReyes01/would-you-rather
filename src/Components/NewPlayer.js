import React, { useState } from 'react'
import { handleAddUser } from '../Actions/users'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const NewPlayer = (props) => {
    const [player, setPlayer] = useState({
        first: '',
        last: '',
        imageURL: '',
    })

    const handleSubmit = (e) => {
        const { dispatch, history } = props
        const {first, last, imageURL} = player
        e.preventDefault()
        dispatch( handleAddUser({first, last, imageURL}))
        history.push('/')
    }

    const handleInput = (e) => {
        const { value, name } = e.target
        setPlayer({...player, [name]: value})
    }

    return(
        <div>
            <div className='container center'>
                <div className='new-player-header'>
                    <h2>New Player</h2>
                </div>
                <div>
                    <form 
                        className='new-player-form' 
                        onSubmit={handleSubmit}>
                        <input 
                            placeholder='Enter your first name'
                            value={player.first}
                            name='first'
                            onChange={handleInput}
                        />

                        <input 
                            placeholder='Enter your last name'
                            value={player.last}
                            name='last'
                            onChange={handleInput}
                        />

                        <input 
                            placeholder='Enter image URL'
                            value={player.imageURL}
                            name='imageURL'
                            onChange={handleInput}
                        />      

                        <button className='btn'
                            disabled={player.first === '' || player.last === '' || player.imageURL === ''}>Submit</button>
                    </form>
                </div>
            </div>
                <h3 className='center to-sign-in'> Back to <Link to='/' >Sign In</Link></h3>
        </div>
        
    )
}

export default connect()(NewPlayer)