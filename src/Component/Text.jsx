export default function Text({ addEmoji, addBracket }) {
    let text = 'I love react';
    if (addEmoji) {
        text = addEmoji(text, '💜');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return (
        <div>{text}</div>
    );
}