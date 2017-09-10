import React, { Component } from 'react'
import { Alert, Form, Icon, Input, Button, Checkbox } from 'antd'
import AdminApi from '../../api/admin'

const FormItem = Form.Item

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: null
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        AdminApi.login(values).then(res => {
          window.location.reload()
        }).catch(res => {
          this.setState({errorMessage:JSON.stringify(res)})
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="/forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </FormItem>
        { 
            this.state.errorMessage !== null ? <Alert message={this.state.errorMessage} type="error"/> : ''
        }
      </Form>
    );
  }
}
export default Form.create()(LoginForm);