import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'



const App = (props) => {
  const { dispatch } = props
  useEffect(() => {
    // const { dispatch } = props

    dispatch(handleInitialData())
  }, [])

  return (
  
    <div className="App">
      <LoadingBar />
      <div className='container'>
        <Nav />
        {props.loading === true
        ? null
        : <div>
            <SignIn/>
          </div>
        }
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
