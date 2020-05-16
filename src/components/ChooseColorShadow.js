import React from 'react'
import {SketchPicker} from 'react-color'

class ChooseColorShadow extends React.Component {
  state = {hidden: true}

  render() {
    const {r, g, b} = this.props.color

    return (
      <>
       <button style={{backgroundColor: `rgba(${r}, ${g}, ${b})`, width: 50, height: 25}} onClick={() => {this.setState({hidden: !this.state.hidden})}} />
          <div>
            {this.state.hidden ? null : <SketchPicker color={this.props.color} onChange={(color) => {this.props.onShadowColorChange(color) }} />}
          </div> 
      </>
    )
  }
}

export default ChooseColorShadow;