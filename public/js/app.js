/*jshint esversion: 6 */
const reactContainer = document.getElementById("root");


const tasks = [

  {
    title: "Don't eat fried oreos",
    priority: "HIGH",
    status: "To Do",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    title: "Don't eat donuts",
    priority: "MEDIUM",
    status: "Doing",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    title: "Tell Donald Trump there are aliens",
    priority: "HIGH",
    status: "Doing",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    title: "Finish last season of Vikings",
    priority: "LOW",
    status: "To Do",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    title: "Find out what happens to Rob Kardashian",
    priority: "LOW",
    status: "Done",
    createdBy: "admin",
    assignedTo: "minion01"
  },
]

const getAllTasks = ()=> {
  return tasks;
}


//PARENT element
class App extends React.Component {

// this defines expected properties
  constructor(props) {
    super(props);

// set initial state
    this.state = {
      queueTasks: [],
      progressTasks: [],
      completedTasks: []
    };
  }
// bind context to relative to "App" component
  // this.getTasks = this.getTasks.bind(this);
  getTasks() {
    const arrayOfTasks = getAllTasks();

    this.setState({
      queueTasks: arrayOfTasks.filter(task => task.status === "To Do"),
      progressTasks: arrayOfTasks.filter(task => task.status === "Doing"),
      completedTasks: arrayOfTasks.filter(task => task.status === "Done")
    });
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    console.log(this.state);
    return (
      <div id='board'>
        <h1> KANBAN BOARD </h1>
          <Column taskList = {this.state.queueTasks}></Column>
          <Column taskList = {this.state.progressTasks}></Column>
          <Column taskList = {this.state.completedTasks}></Column>
      </div>
    )
  }
}

// Child of App
class Column extends React.Component{

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

//Child of Column
class Task extends React.Component{

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


ReactDOM.render(
  // component to render
  <App/>,
  // where to inject this component
  // dom element, or use getElementById
  root
);