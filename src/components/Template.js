import React from 'react'
import App from './App';





const Template = (props) => {
  const templates = [
  {
    red: 40,
    green: 159,
    blue: 237,
    shiftRight: 5,
    shiftDown: 5,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false
  },
  {
    red: 95,
    green: 184,
    blue: 255,
    shiftRight: 10,
    shiftDown: 10,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false
  },
  {
    red: 161,
    green: 216,
    blue: 255,
    shiftRight: 15,
    shiftDown: 15,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false
  },
  {
    red: 202,
    green: 230,
    blue: 255,
    shiftRight: 20,
    shiftDown: 20,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false
  },
  {
    red: 225,
    green: 238,
    blue: 255,
    shiftRight: 25,
    shiftDown: 25,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false
  }
  ]
  
  const onClickTemplate = () => {
    if (props.reverse) {
      props.onClickTemplate(templates.reverse())
    } else {
      props.onClickTemplate(templates)
    }
  }
  
  return (
    <div className="ui segment">
        <style jsx={"true"}>
          {
            `
              .abcd {
                box-shadow: ${App.getCssCode(templates)};
                width: 200px;
                height: 200px;
                background: #79dff1;
              }
            `
          }
        </style>
      <h2>Template</h2>
      <div className="preview-box abcd" onClick={() => onClickTemplate()}></div>
    </div>
  )
}

export default Template;