import Emoji from './EmojiInhe';

export default class TextInhe extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decerotedText = this.addEmoji('I love react learning', '💜');
        return super.render(decerotedText);
    }
}