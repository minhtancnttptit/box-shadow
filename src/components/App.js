import React from "react";
import Generator from "./Generator";
import CssCodeBox from "./CssCodeBox";
import PreviewBox from "./PreviewBox";
import CardSession from "./CardSession";

const DEFAULT_CSS = {
  red: 0,
  green: 0,
  blue: 0,
  shiftRight: 0,
  shiftDown: 0,
  spread: 0,
  blur: 0,
  opacity: 0,
  inset: false
}

class App extends React.Component {
  state = {
    css: [DEFAULT_CSS],
    selectedLayer: 0
  };



  componentDidMount() {
    this.setState({
      css: [{ ...DEFAULT_CSS }]
    });
  }

  getCssCode = () => {
    return this.getListLayer().join(', ');
  }

  getListLayer = () => {
    let listLayer = [];
    for (let layer of this.state.css) {
      let { red, green, blue, shiftRight, shiftDown, spread, blur, opacity, inset } = layer,
        result = `rgba(${red}, ${green}, ${blue}, ${opacity / 100}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
      if (inset === true)
        result += ' inset';
      listLayer.push(result);
    }
    return listLayer;
  }

  onChangeValue = (name, value) => {
    let currentState = this.state;
    currentState.css[this.state.selectedLayer][name] = value;
    this.setState(currentState);
  }

  onChangeCheckBox = (checked) => {
    let currentState = this.state;
    currentState.css[this.state.selectedLayer].inset = checked;
    this.setState(currentState);
  }

  onClickAddLayer = () => {
    let currentState = this.state;
    currentState.css.push({ ...DEFAULT_CSS });
    this.setState(currentState);
  }

  onShadowColorChange = (color) => {
    let currentState = this.state;
    currentState.css[this.state.selectedLayer].red = color.rgb.r;
    currentState.css[this.state.selectedLayer].green = color.rgb.g;
    currentState.css[this.state.selectedLayer].blue = color.rgb.b;
    this.setState(currentState);
  }

  onClickLayer = (id) => {
    this.setState({ selectedLayer: id });
  }

  render() {
    return (
      <div className="ui container">
        <Generator
          onChangeValue={this.onChangeValue}
          onChangeCheckBox={this.onChangeCheckBox}
          onShadowColorChange={this.onShadowColorChange}
          values={this.state.css[this.state.selectedLayer]} />
        <CssCodeBox cssCode={this.getCssCode()}
        />
        <CardSession
          onClickAddLayer={this.onClickAddLayer}
          onClickLayer={this.onClickLayer}
          selectedLayer={this.state.selectedLayer}
          listLayer={this.getListLayer()}
        />
        <PreviewBox boxShadowCss={this.getCssCode()} />
      </div>
    );
  }
}

export default App;
