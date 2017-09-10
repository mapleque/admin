import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import User from './common/user'
import Menu from './common/menu'
import Breadcrumb from './common/breadcrumb'

const { Footer, Content, Sider } = Layout;

class Authed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
      nav: {} // bind privilege, use for menus and breadcrumb
    }
  }
  componentDidMount () {
    const nav = {
      label: 'Home',
      icon: 'home',
      path: '/',
      childs: [{
        label: 'Settings',
        icon: 'tool',
        path: '/settings',
        childs: [{
          label: 'System',
          icon: 'api',
          path: '/settings/system'
        }, {
          label: 'Search',
          icon: 'search',
          path: '/settings/search'
        }]
      }, {
        label: 'User Center',
        icon: 'usergroup-add',
        path: '/users',
        childs: [{
          label: 'Search',
          icon: 'search',
          path: '/users/search'
        }]
      }, {
        label: 'Oauth Center',
        icon: 'tags',
        path: '/oauth',
        childs: [{
          label: 'Clients',
          icon: 'tag',
          path: '/oauth/clients'
        }]
      }, {
        label: 'Statistic',
        icon: 'area-chart',
        path: '/stat',
        childs: [{
          label: 'QPS',
          icon: 'tag',
          path: '/stat/qps'
        }]
      }]
    }
    this.setState({nav: nav})
  }
  handleCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }
  render () {
    return (
      <Layout>
        <Sider collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.handleCollapse}
          breakpoint="lg"
        >
          <User user={this.props.user}/>
          <Menu nav={this.state.nav}/>
        </Sider>
        <Layout style={{ minHeight:'100vh' }}>
          <Content style={{ margin: '0 16px'}}>
            <Breadcrumb location={this.props.location} nav={this.state.nav}/>
            <div style={{ padding: 24, background: '#fff' }}>
              <Switch>
                <Route exact path="/" component={() => <div>home</div>}/>
                <Route path="/settings" component={() => <div>settings</div>}/>
                <Route path="/user" component={() => <div>user</div>}/>
                <Route path="/oauth" component={() => <div>oauth</div>}/>
                <Route path="/stat" component={() => <div>stat</div>}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admin ©{new Date().getFullYear()} Created by Mapleque</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Authed)