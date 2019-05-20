'use strict'

import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Tab from 'react-bootstrap/Tab'
import { views } from '../common/config.js'
import './ressources/style.css'
import Home from './views/Home.js'
import Packs from './views/Packs'
import Settings from './views/Settings.js'

const viewContainers = {
  Home: <Home />,
  Settings: <Settings />,
  Packs: <Packs />
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 'Home' }
  }

  changeView = view => {
    this.setState({ view })
  }

  render () {
    return (
      <Tab.Container activeKey={this.state.view} onSelect>
        <Navbar bg='primary' variant='dark' fixed='top'>
          <Nav justify className='w-100' onSelect={this.changeView}>
            {views.map(view =>
              <Nav.Item key={view}>
                <Nav.Link eventKey={view}>{view}</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar>
        <Tab.Content>
          {views.map(view =>
            <Tab.Pane eventKey={view} key={view}>
              {viewContainers[view]}
            </Tab.Pane>
          )}
        </Tab.Content>
      </Tab.Container>
    )
  }
}
