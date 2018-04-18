import React, { Component } from 'react';
import Iframe from './iframe';

class ExtReact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Iframe src="https://haitlc.github.io/react-ui-extreact-demo/" />
        )
    }
}

export default ExtReact;