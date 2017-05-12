
// create parent component and define where to inject in index.html
const rootContainer = document.querySelector('#root');
class App extends React.Component {
  // pass in props
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      queueCards: [],
      progressCards: [],
      completedCards: []
    };
    // bind context to relative to "App" component
    this.getCards = this.getCards.bind(this);
    this.updateCards = this.updateCards.bind(this);
  }
  // runs getCards on page-load
  componentDidMount() {
    this.getCards();
  }
  // function to retreive all card components
  getCards() {
    return getAllCards()
      // returns a promise (housed in XHRreq file -TBC)
      .then( cards => {
        this.setState({
          queueCards: cards.filter(card => card.status === 'Queue'),
          progressCards: cards.filter(card => card.status === 'Progress'),
          completedCards: cards.filter(card => card.status === 'Completed')
        });
      })
      .catch(console.log);
  }


  render() {
    return (
      <div id="whole-page">
        <h1 id="main-title">KANBAN BOARD</h1>
        <div id="full-board">
          <Column cardList={this.state.queueCards} updateCards={this.updateCards}></Column>
          <Column cardList={this.state.progressCards} updateCards={this.updateCards}></Column>
          <Column cardList={this.state.completedCards} updateCards={this.updateCards}></Column>
        </div>
        <div id="newCardForm">
          <NewCardComponent getCards={this.getCards}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, rootContainer);