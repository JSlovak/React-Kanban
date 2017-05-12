class App extends React.Component {

  handleSubmit (event) {
    event.preventDefault();
    console.log("form was submitted.");
  }
  render(){
     (
      <div>
        <h1>TODO</h1>
        <form onSubmit = {this.handleSubmit}>
          <input/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  // component to render
  <App/>,
  // where to inject this component
  // dom element, or use getElementById
  root
);