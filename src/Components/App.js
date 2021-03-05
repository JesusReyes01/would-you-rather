import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'
import CreateQuestion from './CreateQuestion'
import Home from './Home'
import QuestionPage from './QuestionPage'



const App = (props) => {
  const { dispatch } = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
  
    <Router>
      <Fragment>
        <LoadingBar />
        <div >
          {props.loading === true
          ? null
          : <Nav/>
          }
          {props.loading === true
          ? null
          : <div>
              <Route path='/' exact component={SignIn} />
              <Route path='/home' component={Home} />
              <Route path='/new' component={CreateQuestion} />
              <Route path='/question' component={QuestionPage} />
            </div>
          }
        </div>
      </Fragment>
    </Router>
  );
}

function mapStateToProps({ users }) {
  return {
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
