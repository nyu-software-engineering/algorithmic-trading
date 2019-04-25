import React, { Component } from 'react';
import { Button,Card,Badge,Col,Row} from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';

class AlbumBlock extends Component {

    render() {
    console.log(this.state)
    return (   	
        <Card border="primary" className="text-center">
          <Card.Img variant="top" src={this.props.image} />
          <Card.Title>
            <Link to="AlbumPage">{this.props.name}</Link>         
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.artist}</Card.Subtitle>
            <Badge variant="dark">{this.props.score}</Badge>
          <Row>
            <Col>
              <Button variant="success" size="sm"> Upvote </Button>
            </Col>
            <Col>
            <Button variant="danger" size="sm"> Downvote </Button>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default AlbumBlock; 