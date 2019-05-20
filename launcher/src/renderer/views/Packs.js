'use strict'

import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'

export default class Packs extends React.Component {
  render () {
    return (
      <Container fluid className='mt-5 py-3'>
        <Tab.Container defaultActiveKey='#1'>
          <Row>
            <Col xs={4}>
              <ListGroup>
                <ListGroup.Item action href='#1'>
                  1
                </ListGroup.Item>
                <ListGroup.Item action href='#2'>
                  2
                </ListGroup.Item>
                <ListGroup.Item action href='#3'>
                  3
                </ListGroup.Item>
                <ListGroup.Item action href='#4'>
                  4
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={8}>
              <Container>
                <Tab.Content>
                  <Tab.Pane eventKey='#1'>
                    1
                  </Tab.Pane>
                  <Tab.Pane eventKey='#2'>
                    2
                  </Tab.Pane>
                  <Tab.Pane eventKey='#3'>
                    3
                  </Tab.Pane>
                  <Tab.Pane eventKey='#4'>
                    4
                  </Tab.Pane>
                </Tab.Content>
              </Container>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
