export default class Store {
  state = {};
  subscirbes = new Array();

  constructor( reducer ) {
    this.reducer = reducer;
    this.state = this.reducer();
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer( this.state, action );
    this.subscirbes.forEach(func => { func( this.state ) });
  }

  subscribe(func) {
    this.subscirbes.push( func );
  }
}
