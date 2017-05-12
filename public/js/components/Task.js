window.Task = class Task extends React.Component{

  constructor(props){
    super(props);
    //console.log(props)
  }

  // Render the view of this task
  render(){
    console.log(this.props);
    return (
      <div class= {this.props.task.status}>
        <h3>{ this.props.task.assignedTo }</h3>
        <p>{ this.props.task.title }</p>

      </div>
    );
  }
};