export default class Store {
  subscirbes = new Array();

  constructor( reducer ) {
    this.reducer = reducer;
    this.state = this.reducer({type:null});
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer( action, this.state );
    this.subscirbes.forEach(func => {
      func( this.state );
    });
  }

  subscribe(func) {
    this.subscirbes.push( func );
  }
}
