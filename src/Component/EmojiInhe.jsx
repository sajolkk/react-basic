import React from "react";
import { ReactDOM } from "react-dom/client";

export default class EmojiInhe extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overried) {
        let text = "I am emoji component";
        if (overried) text = overried;
        return <div>{text}</div>;
    }
}