import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardHomme = ({data}) => {
  return (
    <div>
    <Card style={{ width: "400px" }}>
        
      <Card.Img
        variant="top"
        src={data.photo}
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Tailles Disponibles : {data.descrip}</Card.Text>
        <h1>Prix :{data.price} </h1>
        <Button variant="primary">Acheter</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default CardHomme