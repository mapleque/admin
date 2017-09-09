import React, { Component } from 'react'
import AdminApi from './api/admin'
import Unauth from './pages/unauth'
import Authed from './pages/authed'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentWillMount () {
    AdminApi.getUser().then(user => {
      if (user !== null) {
        this.setState({user: user})
      }
    })
  }
  render() {
    return this.state.user === null ? <Unauth /> : <Authed user={this.state.user}/>
  }
}

export default App
