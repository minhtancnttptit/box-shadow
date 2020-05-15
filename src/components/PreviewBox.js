import React from "react";
import { SketchPicker } from "react-color";

class PreviewBox extends React.Component {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== undefined) {
      return { boxShadowCss: nextProps.boxShadowCss };
    }
    return {};
  }

  handleChangeComplete = (hex) => {
    this.setState({ 'background': hex });
  }

  render() {
    const { boxShadowCss, background } = this.state;
    return (
      <>
        <style jsx={"true"}>
          {
            `
              .abc {
                box-shadow: ${boxShadowCss};
                width: 200px;
                height: 200px;
                background: ${background};
              }
            `
          }
        </style>
        <div className="ui segment">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: 20 }}>
            <div>
              <h2>Preview</h2>
              <div className="preview-box abc" />
            </div>
            <div>
              <SketchPicker color="ff0000" onChangeComplete={({ hex }) => this.handleChangeComplete(hex)} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PreviewBox;
