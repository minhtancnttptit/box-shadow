import React from "react";
import RangeSlider from "./RangeSlider";
import { SketchPicker } from 'react-color';


const Generator = (props) => {

  const onChangeCheckBox = (event) => {
    props.onChangeCheckBox(event.target.checked);
  }

  return (
    <div className="ui segment">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: 20 }}>
        <div>
          <h2>Box-Shadow CSS Generator</h2>
          <RangeSlider name="shiftRight" min={-50} max={50} value={props.values.shiftRight} onChange={props.onChangeValue} />
          <RangeSlider name="shiftDown" min={-50} max={50} value={props.values.shiftDown} onChange={props.onChangeValue} />
          <RangeSlider name="spread" min={0} max={100} value={props.values.spread} onChange={props.onChangeValue} />
          <RangeSlider name="blur" min={0} max={100} value={props.values.blur} onChange={props.onChangeValue} />
          <RangeSlider name="opacity" min={0} max={100} value={props.values.opacity} onChange={props.onChangeValue} />
          <input type="checkbox" checked={props.values.inset} onChange={(event) => onChangeCheckBox(event)} />
          <label>Inset</label>
        </div>
        <div>
          <SketchPicker color="ff0000" onChangeComplete={(color) => {props.onShadowColorChange(color) }} />
        </div>
      </div>
    </div>
  )
}

export default Generator;
