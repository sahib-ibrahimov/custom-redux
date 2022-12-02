import {Component} from "react";
import ListItem from "./ListItem.js";

import store from "./store.js";

export default class Info extends Component {
  state = {
    info: [],
    input: ''
  }

  componentDidMount() {
    store.subscribe((state) => {
      const new_array = state.array.slice();
      this.setState({info: new_array});
    })
  }

  clicker = () => {
    store.dispatch({
      type: "ADD",
      data: {
        text: this.state.input
      }
    });
    this.setState({ input: '' });
  }

  inputChange = (e) => {
    this.setState({ input: e.target.value.trim() });
  }

  render() {
    return (
      <>
        <input
          onChange={this.inputChange}
          value={this.state.input}
        />
        <button onClick={this.clicker}>add</button>
        <ul>{this.state.info.map((text, id) =>
          <ListItem text={text} id={id} />
        )}</ul>
      </>
    );
  }
}
