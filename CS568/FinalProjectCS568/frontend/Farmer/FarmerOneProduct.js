import React, { Component } from 'react'

export default class FarmerOneProduct extends Component {
    render() {
        return (
            <div>
               ID:{this.props.id} 
               Name:{this.props.name}  
               Category:{this.props.category} 
               Price:{this.props.price} 
               Qty:{this.props.quantity} 
                <button className='farmer-btn1' onClick={this.props.update}>Update</button>
                <button className='farmer-btn2' onClick={this.props.delete}>Delete</button>
            </div>
        )
    }
}
