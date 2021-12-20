import axios from "axios";
import React from "react";
import Select from 'react-select'


export default class FedBack extends React.Component{
    state = {
        feedback:{
            farmerId :this.props.location.state.fId,
            selected:"",
            comment:"",

        },
        username : this.props.match.params.username
    }
    selectFeedback =(event) =>{
        console.log(event)
        let copy = {...this.state.feedback}
        copy.selected = event.value;
        this.setState({feedback : copy})

    }
    comment=(event)=>{
            let copy = {...this.state.feedback}
            copy.comment = event.target.value;
            if(event.target.value === ""){
                copy.comment = "No Comment given"
            }
            this.setState({feedback : copy})
    }

    submitFeedback(username){
        console.log(this.state.feedback.selected)
        console.log(this.state.feedback.farmerId)
        if(this.state.feedback.selected !== "Good"){
        axios.put('/farmers/'+this.state.feedback.farmerId+'/feedbacks', this.state.feedback)
        .then(response =>{
            console.log(response.data)
        })
    }
        
    }
    customerHomePage= (username) => {
        console.log(username)
        this.props.history.push('/customer-homepage/' + username)
      }
    
    

    render(){
       
    const options =[
        { value: 'excellent', label :"Excellent"},
        {value :'good', label: "Good"},
        {value :'bad', label: "Bad"},
     ]
      console.log(this.state.feedback.farmerId)
   
    
        return(
            <div>
     <ul>
         <headers>
             <p><h4>Thank You for Shopping with Brilliance Farmers Online Shopping! </h4></p>
             We hope you have enjoyed shopping with us. Please give your comment and rating about the Farmers products.
         </headers>
         </ul>

         <div class = 'container'>
             <ul>
                <Select options={options} onChange={(event)=>{this.selectFeedback(event)}}/>
            </ul>
            <ul>Comment: </ul>
            <ul>
                <textarea placeholder="Please give us your comment" onChange ={(event)=> {{this.comment(event)}}}/>
                </ul>
                <ul>
                 <button  onClick={() => {this.submitFeedback(this.state.username)}}>Submit</button>
                 <button  onClick={() => {this.customerHomePage(this.state.username)}}>Home Page</button>
             </ul>
             

            
         </div>
         



        
         </div>
        )

    }
}