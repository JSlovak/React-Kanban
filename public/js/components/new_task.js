/*jshint esversion: 6 */
class NewCardForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: id,
      title: "",
      priority: "",
      status: "Queue",
      created_by: "",
      assigned_to: "",
      button: "Next Stage"
    };


    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.handlePriorityChange = this.handlePriorityChange.bind(this);

    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);

    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
  }

    addCard(card){
      console.log(card);
      this.props.addCard(card);
      const title = "";
      const priority = "";
      const created_by = "";
      const assigned_to = "";
      this.setState({
        id,
        title,
        priority,
        status,
        created_by,
        assigned_to
      });
    }

    handleSubmit(event) {
      console.log('hit handle submit');
      id++;
      event.preventDefault();
      console.log(this.state);
      this.addCard(this.state);
    }

    handleTitleChange(event){
      console.log('hit handle title change')
      event.preventDefault();
      this.setState({ title: event.target.value });
    }
    handleStatusChange(event){
      console.log('hit handle status change')
      event.preventDefault();
      this.setState({ status: event.target.value});
    }
    handlePriorityChange(event){
      console.log('hit handle priority change')
      event.preventDefault();
      this.setState({ priority: event.target.value });
    }
    handleCreatedByChange(event) {
      console.log('hit handle created by change')
      event.preventDefault();
      this.setState({ created_by: event.target.value });
    }

    handleAssignedToChange(event){
      console.log('hit handle assigned to change')
      event.preventDefault();
      this.setState({ assigned_to: event.target.value});
    }
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title} />
          </div>

          <div>
            <input type="text" placeholder="Priority" onChange={this.handlePriorityChange} value={this.state.priority} />
          </div>

          <div>
            <input type="text" placeholder="Created By" onChange={this.handleCreatedByChange} value={this.state.created_by} />
          </div>

          <div>
            <input type="text" placeholder="Assigned To" onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
          </div>

          <div>
            <button type="submit">Add Card</button>
          </div>
        </form>
        )
    }
  }
