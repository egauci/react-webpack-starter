import React, {Component, PropTypes} from 'react';
import lcss from './Numberfact.css';

class Numberfact extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    clearFact: PropTypes.func.isRequired,
    fact: PropTypes.object.isRequired,
    getFact: PropTypes.func.isRequired
  }
  getAFact() {
    this.props.clearFact();     // clear old fact if any
    this.props.getFact();       // fetch a new fact
  }
  componentWillMount() {
    this.getAFact();
  }
  handleClick(e) {
    e.preventDefault();
    this.getAFact();
  }
  render() {
    const number = this.props.fact.get('number');
    const text = this.props.fact.get('text');
    if (!text) {
      return <p className={lcss.waiting}>Waiting for fact</p>;
    }
    return (
      <div>
        <h2>Random Number Fact</h2>
        <p><span className={lcss.label}>Number:</span> {number}</p>
        <p><span className={lcss.label}>Fact:</span> {text}</p>
        <button className={lcss.button} onClick={this.handleClick}>Get another fact</button>
      </div>
    );
  }
}

export default Numberfact;
