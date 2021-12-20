import React, { Component } from 'react'

export default class ProductOne extends Component {
    render() {
        return (
            <div>
                Name : {this.props.name}
                Price: {this.props.price}
                <button onClick ={this.props.showDetails}> Show Detail</button>
                {/* <button onClick ={this.props.updateProduct}> Update</button> */}
                {/* <button onClick ={this.props.deleteProduct}> Delete</button> */}
            </div>
        )
    }
}
