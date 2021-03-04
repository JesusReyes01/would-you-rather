import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'
import CreateQuestion from './CreateQuestion'
import Home from './Home'



const App = (props) => {
  const { dispatch } = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
  
    <div className="App">
      <LoadingBar />
      <div >
        {props.loading === true
        ? null
        : <Nav/>
        }
        {props.loading === true
        ? null
        : <div>
            {/* <SignIn/> */}
            <Home />
            {/* <CreateQuestion /> */}
          </div>
        }
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
