'use strict'

import { shell } from 'electron'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { news: 'Loading...' }
    window.fetch('https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md')
      .then(res => res.text())
      .then(text => this.setState({ news: text }))
      .catch(err => console.error(err))
  }

  handleLinks (e) {
    const href = e.target.getAttribute('href')
      ? e.target.getAttribute('href')
      : e.target.parentNode.getAttribute('href')

    if (!href.startsWith('#')) {
      e.preventDefault()
      shell.openExternal(href)
    }
  }

  render () {
    return (
      <>
        <Container className='my-5 py-3'>
          <Markdown
            options={{
              overrides: {
                img: {
                  component: Image,
                  props: { fluid: true }
                },
                a: {
                  props: { onClick: this.handleLinks }
                },
                table: {
                  component: Table,
                  props: {
                    striped: true,
                    bordered: true
                  }
                }
              }
            }}
          >
            {this.state.news}
          </Markdown>
        </Container>
        <Navbar bg='primary' variant='dark' fixed='bottom'>
          <Nav justify className='w-100'>
            <Nav.Item>
              <Nav.Link>Play</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </>
    )
  }
}
