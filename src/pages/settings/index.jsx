import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './search.jsx'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <BrowserRouter basename="/settings">
        <Switch>
          <Route path="/search" component={Search}/>
        </Switch>
      </BrowserRouter>
    )
  }
}