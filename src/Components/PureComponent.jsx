import React, { Component } from 'react'
import { PureComponent } from 'react'

class pure extends PureComponent {

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
        console.log("rendering pure component:");

        return (
            <div>
             <button onClick={this.incrementCount}> Pure Component: {this.state.count} times</button>
            </div>
        )
    }
}

export default pure
