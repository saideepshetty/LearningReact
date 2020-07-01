import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment(){
        this.state.count = this.state.count + 1
        this.setState({
            count : this.state.count
        })
    }
    decrement(){
        if (this.state.count > 0){
            this.state.count = this.state.count - 1 
        }
        this.setState({
            count : this.state.count
        })
    }
    render() {
        return (
            <div>
                Count = {this.state.count}<br></br><br></br>
                <button onClick={()=>this.increment()}>Up</button> 
                <button onClick={()=>this.decrement()}>Down</button>
            </div>
        )
    }
}

export default Counter
