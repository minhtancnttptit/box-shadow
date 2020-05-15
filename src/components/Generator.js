import React from "react";
import RangeSlider from "./RangeSlider";
import { SketchPicker } from 'react-color';


class Generator extends React.Component {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== undefined) {
      console.log(nextProps.values);

      return nextProps.values;
    }
    return {};
  }

  onChangeCheckBox = (event) => {
    this.props.onChangeCheckBox(event.target.checked);
    this.setState({ inset: event.target.checked });
  }

  render() {
    return (
      <div className="ui segment">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: 20 }}>
          <div>
            <h2>Box-Shadow CSS Generator</h2>
            <RangeSlider name="shiftRight" min={-50} max={50} value={this.state.shiftRight} onChange={this.props.onChangeValue} />
            <RangeSlider name="shiftDown" min={-50} max={50} value={this.state.shiftDown} onChange={this.props.onChangeValue} />
            <RangeSlider name="spread" min={0} max={100} value={this.state.spread} onChange={this.props.onChangeValue} />
            <RangeSlider name="blur" min={0} max={100} value={this.state.blur} onChange={this.props.onChangeValue} />
            <RangeSlider name="opacity" min={0} max={100} value={this.state.opacity} onChange={this.props.onChangeValue} />
            <input type="checkbox" checked={this.state.inset} onChange={(event) => this.onChangeCheckBox(event)} />
            <label>Inset</label>
          </div>
          <div>
            <SketchPicker color="ff0000" onChangeComplete={(color) => { this.props.onShadowColorChange(color) }} />
          </div>
        </div>
      </div>
    )
  }
}

export default Generator;
