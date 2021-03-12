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
import LeaderBoard from './LeaderBoard'
import Results from './Results'
import NewPlayer from './NewPlayer'



const App = (props) => {
  
  useEffect(() => {
    const { dispatch } = props
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
              <Route path='/question/:id' component={QuestionPage} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/results/:id' component={Results} />
              <Route path='/newPlayer' component={NewPlayer} />
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
