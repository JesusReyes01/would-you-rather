import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'



const App = (props) => {
  // useEffect(() =>
  //   this.props.dispatch(handleInitialData())
  // )
  return (
    <div className="App">
      App
    </div>
  );
}

export default connect()(App)
