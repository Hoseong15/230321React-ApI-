import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  return (
    <Container>
      <Row style={{marginTop : "50px"}}>
        <Col>
          <img width={500} src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f576a49-cf62-4f8b-b927-6e631c17eeae/%EC%A1%B0%EB%8D%98-%EC%8A%A4%ED%85%8C%EC%9D%B4-%EB%A1%9C%EC%96%84-2-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-RDhAQ5jO.png" alt="" />
        </Col>
        <Col>
          <h2>title</h2>
          <div>price</div>
          <div>사이즈 : size</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail