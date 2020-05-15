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

  static getCssCode = (css) => {
    return this.getListLayer(css).join(', ');
  }

  static getListLayer = (css) => {
    let listLayer = [];
    for (let layer of css) {
      listLayer.push(App.getCssLayer(layer));
    }
    return listLayer;
  }

  static getCssLayer = (layer) => {
    let { red, green, blue, shiftRight, shiftDown, spread, blur, opacity, inset } = layer,
    result = `rgba(${red}, ${green}, ${blue}, ${opacity / 100}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
    if (inset === true)
    result += ' inset';
    return result;
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

  onSwapLayer = (css, selected) => {
    if (css !== undefined) {
      this.setState({'css': css, selectedLayer: selected})
    }
  }

  onRemoveLayer = (id) => {
    let currentState = {...this.state};
    currentState.css.splice(id, 1);
    if (currentState.selectedLayer !== 0)
      currentState.selectedLayer--;
    this.setState(currentState);
  }

  render() {
    return (
      <div className="ui container">
        <Generator
          onChangeValue={this.onChangeValue}
          onChangeCheckBox={this.onChangeCheckBox}
          onShadowColorChange={this.onShadowColorChange}
          values={this.state.css[this.state.selectedLayer]}
        />
        <CssCodeBox cssCode={App.getCssCode(this.state.css)} />
        <CardSession
          onClickAddLayer={this.onClickAddLayer}
          onClickLayer={this.onClickLayer}
          onSwapLayer={this.onSwapLayer}
          onRemoveLayer={this.onRemoveLayer}
          selectedLayer={this.state.selectedLayer}
          css={this.state.css}
        />
        <PreviewBox boxShadowCss={App.getCssCode(this.state.css)} />
      </div>
    );
  }
}

export default App;
