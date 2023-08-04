import React from "react";
import { ReactDOM } from "react-dom/client";

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ addBracket: this.addBracket });
    }
}