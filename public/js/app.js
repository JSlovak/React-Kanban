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

const Card = (props) => (
  <li>
    <h3>Title: { props.card.title }</h3>
    <p>id: { props.card.id }</p>
    <p>Priority: { props.card.priority }</p>
    <p>Status: { props.card.status}</p>
    <p>Created by: { props.card.created_by}</p>
    <p>Assigned to: { props.card.assigned_to}</p>
    <input type="button" onClick={
      function(){
        props.next(props.card.id);
      }
    } value= { props.card.button }/>
  </li>
);

const CardList = ({ cards, next }) =>(
  <ul>
    {  cards.map(card => <Card card={card} next={next} /> ) }
  </ul>
);


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

  render() {
    return (
      <div id='board'>
        <h1> KANBAN BOARD </h1>
        <div id='toDo'>
          <Column taskList = {this.state.queueTasks}></Column>
          <Column taskList = {this.state.progressTasks}></Column>
          <Column taskLIst = {this.state.completedTasks}></Column>
        </div>
      </div>
    )
  }
}

// Child of App
class Column extends React.Component{

  constructor(props){
    super(props);
    this.updateCards = this.updateCards.bind(this);

    console.log(props);
  }

  render(){
    return (
      <div id="queue">
        <Task></Task>
      </div>
    );
  }
};

//Child of Column
class Task extends React.Component{

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return (
      <div id="queue">

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