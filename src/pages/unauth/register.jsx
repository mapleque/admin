import React, { Component } from 'react'
import { Alert } from 'antd'

class RegisterForm extends Component{
  render () {
    return (
      <Alert
        message="Announcement"
        description={
          <p>Register is no longer opened for every one! Best wishes!  <a href="/">Click here</a> to go back.</p>}
        type="info"
        showIcon
      />
    )
  }
}

export default RegisterForm