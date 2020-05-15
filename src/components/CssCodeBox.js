import React from "react";

class CssCodeBox extends React.Component {
    state = {};

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({'css': nextProps.cssCode});
    }

    render() {
        return (
            <div className="ui segment">
                <h2>CSS code</h2>
                <label className="Css Code">
                    {'box-shadow: ' + this.state.css + ';'}
                </label>
            </div>
        );
    }
}

export default CssCodeBox;
