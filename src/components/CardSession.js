import React from "react";
import {ReactSortable} from 'react-sortablejs'
import App from "./App";

class CardSession extends React.Component {
  state = {
    list: [],
    selectedLayer: 0
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps !== undefined) {
      let listLayer = nextProps.css.map((item, index) => {
        return (
          {id: index, value: item}
        );
      });
      return { 'list': listLayer, selectedLayer: nextProps.selectedLayer };
    }
    return { 'list': null };
  }

  onSwap = (newList) => {
    let result = [];
    let selected = 0;
    newList.forEach(item => {
      result.push(item.value);
    });
    selected = newList.findIndex(x => x.id === this.state.selectedLayer);
    this.props.onSwapLayer(result, selected);
  }

  onRemoveLayer = (id) => {
    if (this.state.list.length > 1) {
      this.props.onRemoveLayer(id);
    }
  }

  render() {
    return (
      <div className="card-session ui segment container">
        <button onClick={this.props.onClickAddLayer}>Add layer</button>
        <br />
        <ReactSortable
          list={this.state.list}
          setList={newList => this.onSwap(newList) }
        >
          {this.state.list.map(item => (
            <div key={item.id}>
              <button 
                onClick={() => this.props.onClickLayer(item.id)}
                style={item.id === this.props.selectedLayer ? {background: 'pink'} : null}
              >
                {App.getCssLayer(item.value)}
              </button>
              <button className="removeLayer" onClick={() => this.onRemoveLayer(item.id)}>
                Delete
              </button>
            </div>
          ))}
        </ReactSortable> 
      </div>
    );
  }
}

export default CardSession;