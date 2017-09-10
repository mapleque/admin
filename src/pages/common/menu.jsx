import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import AdminApi from '../../api/admin'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleLogout = (item) => {
    if (item.key === 'logout') {
      AdminApi.logout().then(res=>{
        this.props.history.push('/')
        window.location.reload()
      })
    }
  }
  buildMenus = (nav) => {
    if (nav.map !== undefined) {
      return nav.map(item => this.buildMenus(item))
    }
    if (nav.childs !== undefined) {
      return (
        <SubMenu key={nav.path} title={
          <span>
            <Icon type={nav.icon} />
            <span>{nav.label}</span>
          </span>
        }>
          { this.buildMenus(nav.childs) }
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={nav.path}>
          <Link to={nav.path}>
            <Icon type={nav.icon} />
            <span className="nav-text">{nav.label}</span>
          </Link>
        </Menu.Item>
      )
    }
  }
  render () {
    return (
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={[]} onClick={this.handleLogout}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span className="nav-text">sign out</span>
        </Menu.Item>
        <Menu.Item key="home">
            <Link to="/">
              <Icon type="home" />
              <span className="nav-text">Home</span>
            </Link>
        </Menu.Item>
        {
          this.props.nav.childs !== undefined ? this.buildMenus(this.props.nav.childs) : ''
        }
      </Menu>
    )
  }
}

export default withRouter(MyMenu)