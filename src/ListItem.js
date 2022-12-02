import {Component} from "react";

import store from "./store.js";

export default class ListItem extends Component {
  clicker = (id) => {
    store.dispatch({
      type: "DEL",
      data: {
        id: id
      }
    });
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={() =>
          {this.clicker( this.props.id )}
        }>x</button>
      </li>
    );
  }
}
