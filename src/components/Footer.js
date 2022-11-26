import React from 'react' 
import {Col, Container, Row, TabContainer } from 'react-bootstrap'

const Footer = () =>{
    return(
        <Container fluid className='mt-1' style={{backgroundColor: 'black'}} >
            <Container  style={{color:'white'}}  className='mt-2'>
                <Row>
                    <Col xs={6} md={4} >
                        <img  src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png' alt='Moringa' width={150} height={30} />
                        <div>
                            <p>Courses</p>
                            <p>Careers</p>
                            <p>FAQs</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Events</p>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                    <div>
                            <p>
                                Ngong Lane, Ngong Lane Plaza, 1st Floor,
                                Nairobi Kenya
                            </p>
                            <p>
                                +254712293878
                                (Admissions/General Enquiries)
                            </p>
                            <p> +254741493565 (Data Science)</p>
                            
                            <p> +254712293878 (WhatsApp)</p>
                            <p>contact@moringaschool.com</p>
                            <p>admission@moringaschool.com</p>
                            <p>P.O Box 28860 00100, Nairobi</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default  Footer;