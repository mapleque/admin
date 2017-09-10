import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import LoginForm from './unauth/login'
import RegisterForm from './unauth/register'
import ForgotForm from './unauth/register'

const { Content, Footer } = Layout;

class Unauth extends Component {
  render () {
    return (
      <Layout style={{background:'#fff'}}>
        <h1 className="login-form-title">Mapleque Admin</h1>
        <Content style={{padding: 50, margin: 'auto', textAlign: 'certer'}}>
          <BrowserRouter>
            <Switch>
              <Route path="/register" component={RegisterForm}/>
              <Route path="/forgot" component={ForgotForm}/>
              <Route path="/" component={LoginForm}/>
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin ©{new Date().getFullYear()} Created by Mapleque</Footer>
      </Layout>
    )
  }
}
export default Unauth