import React from 'react'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <>
        <PublicHeader />
        <section className=' d-flex align-items-center'  style={{height: "600px"}}>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col md={12} >
                        <div className='display-1 text-danger'>404</div>
                        <div className='display-4'>Oops! Page not found</div>
                    </Col>
                </Row>
            </Container>

        </section>
        <PublicFooter />
    </>
    
  )
}

export default NotFound