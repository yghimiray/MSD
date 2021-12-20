import React, { Component } from 'react'
import LimitedTextArea from './LimitedTextArea'

export default class AppForLimitedText extends Component {
    state={
        limit:0,
        text:''
    }

    limitChange = (event)=>{
        let copy = {...this.state}
        copy.limit=event.target.value;
        this.setState({limit:copy.limit})
    }

    textChange = (event)=>{
        let copy = {...this.state}
        copy.text=event.target.value;
        this.setState({text:copy.text})
    }


    render() {
        return (
            <div>
               
                <LimitedTextArea
                 limit = {<input type={Number} name = "limit" onChange={(event)=> this.limitChange(event)}></input>}
                 text = {<input type='text' name = 'text' maxLength={this.state.limit} onChange={(event)=> this.textChange(event)} ></input>}
                 count={this.state.text.length}
                 ></LimitedTextArea>
            </div>
        )
    }
}
