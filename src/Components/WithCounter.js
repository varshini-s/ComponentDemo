import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
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

	 console.log("rendering hoc ")
			return (
				<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}/>
			)
		}
	}
	return WithCounter
}

export default withCounter