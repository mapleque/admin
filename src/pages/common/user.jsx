import React, { Component } from 'react'
import { Avatar } from 'antd'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTime: ''
    }
  }
  componentDidMount () {
    const toStr = (num) => (num < 10 ? '0' : '') + num
    setInterval(() => {
      const now = new Date()
      const str =
        now.getFullYear() + '-' +
        toStr(now.getMonth() + 1) + '-' +
        toStr(now.getDate()) + ' ' +
        toStr(now.getHours()) + ':' +
        toStr(now.getMinutes()) + ':' +
        toStr(now.getSeconds())
      this.setState({currentTime:str})
    })
  }
  render () {
    return (
      <div className="user">
        <Avatar className="icon">{this.props.user.username[0].toUpperCase()}</Avatar>
        <div>
          <span className="current-time">{this.state.currentTime}</span>
          <span className="username">{this.props.user.username}</span>
        </div>
      </div>
    )
  }
}

export default User