import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Cards from './Cards';



let Content = ()=> {
    return(
        <Container  className='ml-1' >
            <Row >
                <Col >
                    <Row xs={1} md={2} lg={3} >
                        
                        <Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container><Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container><Container className='mt-1'>
                            <Cards />
                        </Container>
                        <Container className='mt-1'>
                            <Cards />
                        </Container>
                       
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Content;
