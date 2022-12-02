import Store from "./Store.js";

const initState = {
  array: []
};

function reducer(state=initState, action) {
  switch (action) {
    case "ADD":
        const new_array = state.array.slice();
        new_array.push('a');
        return {...state, array: new_array};
      break;
    default:
  }
  return state;
}

export default new Store(reducer);
