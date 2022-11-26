import React from 'react';
import {Card, Button, Container} from 'react-bootstrap'

let Cards=() =>{
    return(
      <Container className='mb-1'>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' alt='Avatar1' width={300} height= {300}  />
          <Card.Body>
            <Card.Title><h1>2021 Projects</h1></Card.Title>
            <Button variant="primary">Show Contributors </Button>
          </Card.Body>
        </Card>
      </Container>
    )
}
export default Cards;