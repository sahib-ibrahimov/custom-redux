import {Component} from "react";

import store from "./store.js";

export default class Info extends Component {
  state = {
    info: []
  }

  componentDidMount() {
    store.subscribe((state) => {
      const new_array = state.array.slice();
      this.setState({info: new_array});
    })
  }

  clicker = () => {
    store.dispatch("ADD");
  }

  render() {
    return (
      <>
        <button onClick={this.clicker}>add</button>
        <ul>{this.state.info.map(a => <li>a</li> )}</ul>
      </>
    );
  }
}
