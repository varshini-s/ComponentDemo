import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {

  render() {
    console.log("rendering component which uses hoc ")

    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Component using HOC: {count} times</button>
	}
}

export default withCounter(ClickCounter)