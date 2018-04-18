import React, { Component } from 'react';

class ExtReact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const iframeStyle = {
            width: '100%',
            height: '100%',
            border: '0',
            'min-height': '650px',
        }

        return (
            <iframe 
                frameBorder={'0'}
                width={'100%'}
                height={'100%'}
                style={iframeStyle}
                src="https://haitlc.github.io/react-ui-extreact-demo/">
            </iframe>
        )
    }
}

export default ExtReact;