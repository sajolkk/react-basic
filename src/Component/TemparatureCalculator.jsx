import React from "react";
import { ReactDOM } from "react-dom/client";
import BoilingVerdic from './BoilingVerdic';
import TemparatureInput from './TemparatureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class TemparatureCalculator extends React.Component {

    state = {
        temparature: '',
        scale: 'c'
    }
    onChangeTemparatur = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };
    render() {
        const { temparature, scale } = this.state;
        const celsius = (scale == 'f') ? convert(temparature, toCelsius) : temparature;
        const fahrenheit = (scale == 'c') ? convert(temparature, toFahrenheit) : temparature;
        // console.log(fahrenheit);
        return (
            <>
                <TemparatureInput scale="c" temparature={celsius} changeTemparatur={this.onChangeTemparatur} />
                <TemparatureInput scale="f" temparature={fahrenheit} changeTemparatur={this.onChangeTemparatur} />

                <BoilingVerdic celsius={celsius} />

            </>
        );
    }
}