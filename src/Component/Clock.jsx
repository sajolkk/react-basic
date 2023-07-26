import React from 'react'
import ReactDOM from 'react-dom/client'

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{this.props.children}: {new Date().toLocaleTimeString(this.props.localet)} </span>
                </h1>
            </div>
        );
    }
}

export default Clock