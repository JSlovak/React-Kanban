window.Column = class Column extends React.Component{

  constructor(props){
    super(props);
    //console.log(this.props);
  }

  // bind here
  // Render the view of this column
  render(){
    console.log(this.props);
    return (
      <div class="column">
        {
          this.props.taskList.map((task)=>{
            return <Task task={task}/>

          })
        }
      </div>
    );
  }
};