import React from 'react'
import ReactDOM from 'react-dom/client'

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date() };

    componentDidMount() {
        this.clockRef = setInterval(() => { this.updateTime() }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockRef);
    }

    updateTime() {
        this.setState({
            date: new Date(),
        })
    }
    render() {
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{this.props.children}: {this.state.date.toLocaleTimeString(this.props.localet)} </span>
                </h1>
            </div>
        );
    }
}

export default Clock