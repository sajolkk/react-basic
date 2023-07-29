import React from 'react'
import ReactDOM from 'react-dom/client'

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date(), language: 'en-US' };

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
    changeLanguage = (language) => {
        if (language == 'bn-BD') {
            this.setState({
                language: 'en-BD'
            });
        } else {
            this.setState({
                language: 'bn-BD'
            });
        }
    }
    render() {
        const { date, language } = this.state;
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{this.props.children}: {date.toLocaleTimeString(language)} </span>
                </h1>
                <button onClick={() => this.changeLanguage(language)}>Change Language</button>
            </div>
        );
    }
}

export default Clock