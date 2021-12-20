import { Button, Card } from 'react-bootstrap'
import './Products.css'

export default function DisplayProducts(props) {
    console.log("i am display")

    return (

        <Card className="product-card" style={{ width: '20rem', background:'#dfe924', color: 'red' }}>
            <Card.Header style={{color: 'black'}}>All the way from farm -Fresh and Organic</Card.Header>
            <Card.Img variant="top" src="../download.jpeg" />
            <Card.Body>
                <Card.Title style={{ color: 'green', fontFamily: 'serif', fontSize: 40, textAlign: 'left' }} >
                    {props.name}
                </Card.Title>

                <Card.Title >
                    Category : {props.category}
                </Card.Title>

                <Card.Title  style={{color: 'black', fontFamily: 'Trebuchet MS', fontSize:22,}}>
                    Price : {props.price}
                </Card.Title>
                <Button type ="checkbox" variant="secondary" onClick={props.addToCartBtnHandler}>Add to Cart</Button>
            </Card.Body >
        </Card>


    )
}

