import React, { Component } from 'react'

class simple extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
       
        this.setState({count:1})

    }

    render() {
        console.log("rendering simple component:");

        return (
            <div>
             <button onClick={this.incrementCount}>Component: Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default simple
