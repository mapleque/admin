import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

class MyBreadcrumb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    
    
    const path = this.props.location.pathname
    let list = path.split('/').map(item => {
      return {
        label: item === '' ? 'home' : item,
        path: item
      }
    })
    this.setState({list: list})
  }
  buildBreadcrumbMap = (nav) => {
    let map = {}
    map[nav.path] = nav
    if (nav.childs !== undefined) {
      nav.childs.map(item => {
        map = {...map, ...this.buildBreadcrumbMap(item)}
      })
    }
    return map
  }
  render () {
    const { location, nav } = this.props;
    const breadcrumbNameMap = this.buildBreadcrumbMap(nav)
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url] ? breadcrumbNameMap[url].label : ''}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
      <Breadcrumb style={{ margin: '12px 0' }}>
        {breadcrumbItems}
      </Breadcrumb>
    )
  }
}

export default MyBreadcrumb