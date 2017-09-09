import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Breadcrumb, Icon } from 'antd'
import Menu from './common/menu'

import AdminApi from '../api/admin'
const { Header, Footer, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Authed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  handleCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }
  handleLogout = () => {
    console.log(this.props)
    AdminApi.logout().then(res=>{
      this.props.history.push('/')
      window.location.reload()
    })
  }
  render () {
    return (
      <Layout>
        <Sider collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.handleCollapse}
          breakpoint="lg"
        >
          <Menu />
        </Sider>
        <Layout style={{ height:'100vh', overflowY: 'scroll' }}>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff' }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admin ©{new Date().getFullYear()} Created by Mapleque</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Authed)