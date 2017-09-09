import React, { Component } from 'react'
import { Alert } from 'antd'

class ForgotForm extends Component{
  render () {
    return (
      <div>
        <Alert
            message="Notice"
            description={
              <p>You can not forgot your password! No way to find out now! <a href="/">Click here</a> to go back.</p>
            }
            type="warning"
            showIcon
        />
      </div>
    )
  }
}

export default ForgotForm