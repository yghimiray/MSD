import { Button, Card } from 'react-bootstrap'
import './Display.css'

export default function DisplayFarmers(props) {
    console.log(" I am here")
    return (
        <div className = "Display">
         <Card style={{ width: '20rem', background:'yellow',color: 'red' }}>
            

            <Card.Body>
              <Card.Title style ={{color:'black', fontFamily:'fantasy', fontSize:44}}>
                    {props.farm}
                </Card.Title> 
                <Card.Img variant="top" width="290" height="190" src="../farm.jpeg" />
                <Card.Title style ={{color:'blue', fontFamily:'monospace', fontSize:22}}>
                    {props.address}
                    <Card.Title style ={{color:'green', fontFamily:'serif', fontSize:18, textAlign:'left'}}>
                Speciality:- {props.special}
                </Card.Title>
                    
                </Card.Title>
                <Card.Title style ={{color:'red', fontFamily:'serif', fontSize:18, textAlign:'middle'}}>
                Rating:{props.rating}
               
                </Card.Title>  
            </Card.Body>


            <Button  variant ="primary" onClick={props.selectFarmerBtnHandler}>Select This Farm</Button>
        </Card>
        </div>
       




        // <div>
        //     <p>
        //     Farm :{props.farm}
        //     </p>
        //     <p>
        //     Address :{props.address}
        //     </p>

        //     <p>
        //      Rating:{1}
        //     </p>
        //     <button onClick ={props.selectFarmerBtnHandler}>Select This Farm</button>
        //     <hr/>
        // </div>
    )
}