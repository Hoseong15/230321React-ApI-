import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null)

  const getDetailData = async() => {
    let url = `http://localhost:3004/products/${id}`;
    let res = await fetch(url);
    let data = await res.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(()=> {
    getDetailData();
  },[])

  return (
    <Container>
      <Row style={{marginTop : "50px"}}>
        <Col>
          <img width={500} src={product?.img}/>
        </Col>

        <Col>
          <h2>{product?.title}</h2>
          <div>{product?.price}</div>
          <div>사이즈 : {product?.size}</div>
        </Col>
        
      </Row>
    </Container>
  )
}

export default ProductDetail