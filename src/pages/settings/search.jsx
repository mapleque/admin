import React, { Component } from 'react'
import { Table } from 'antd'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let data = []
    for (let i=0; i<10; i++) {
      data.push({
        id: i,
        field1: i,
        field2: 2*i
      })
    }
    const columns = [{
      title: '字段1',
      dataIndex: 'field1',
      key: 'field1'
    }, {
      title: '字段2',
      dataIndex: 'field2',
      key: 'field2'
    }]
    return (
      <Table dataSource={data} columns={columns} total={100} rowKey="id"></Table>
    )
  }
}