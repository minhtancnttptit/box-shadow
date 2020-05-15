import React from "react";

const RangeSlider = (props) => {
  const onChangeSlider = (event) => {
    props.onChange(props.name, event.target.value);
  }

  return (
    <>
      <style jsx="true">
        {
          `
            .Slider {
                width: 300px
            }
          `
        }
      </style>
      <div>
        <div className="label">
          <label>{props.name}</label>
        </div>
        <div className="RangeSlider ">
          <input type="range" className="Slider" id="Slider" step={1}
            aria-valuemax={props.max} aria-valuemin={props.min} min={props.min}
            max={props.max} value={props.value} onChange={e => onChangeSlider(e)} />
        </div>
      </div>
    </>

  );
}

export default RangeSlider;
