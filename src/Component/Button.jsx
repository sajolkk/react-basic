import React from "react";
import { ReactDOM } from "react-dom/client";

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { change: currentChange, language: currentLanguage } = this.props;
        const { change: nextChange, language: nextLanguage } = nextProps;
        if (currentChange === nextChange && currentLanguage == nextLanguage) {
            return false;
        }
        return true;
    }

    render() {
        const { change, children, language } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(language)}>{children}</button>
            </>
        );
    }
}

export default Button;