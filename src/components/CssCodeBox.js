import React from "react";

const CSSRender = ({ cssCode }) => {
  return (
    <div className="ui segment">
      <h2>CSS code</h2>
      <label className="Css Code">
        {'box-shadow: ' + cssCode + ';'}
      </label>
    </div>
  )
}

export default CSSRender;
