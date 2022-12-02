import Store from "./Store.js";

const initState = {
  array: []
};

function reducer(action, state=initState) {
  switch (action.type) {
    case "ADD": {
        const new_array = state.array.slice();
        new_array.push( action.data.text );
        return {...state, array: new_array};
      }
      break;
    case "DEL": {
        const new_array = state.array.slice();
        new_array.splice( action.data.id, 1 );
        return {...state, array: new_array};
      }
      break;
    default:
  }
  return state;
}

export default new Store(reducer);
