import React from 'react'

const Question = (props) => {
    const { image, questionOptions } = props

    const handleClick = (e) => {
        e.preventDefault()
    }

    return(
        <div className='container center'>
            <div className='question-header'>
                <h4>'Person' asks:</h4>
            </div>
            <div className='question-content'>
                <img
                    src={image}
                    alt='asker image'
                    className='question-image'
                />
                <span className='vertical-line'></span>
                <div className='poll-preview'>
                    <p><strong>Would you rather</strong></p>
                    <p className='question-preview'>question...</p>
                    <button 
                        className='poll-button' 
                        onClick={handleClick}
                        type='button'>View Poll</button>
                </div>
            </div>
        </div>
    )
}

export default Question