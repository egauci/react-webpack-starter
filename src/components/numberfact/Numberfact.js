import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getFact, clearFact} from '../../actions';
import lcss from './Numberfact.css';

class Numberfact extends Component {
  static propTypes = {
    clearFact: PropTypes.func.isRequired,
    fact: PropTypes.object,
    getFact: PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.clearFact();     // clear old fact if any
    this.props.getFact();       // fetch a new fact
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fact: state.get('fact')
  };
}

export default connect(mapStateToProps, {getFact, clearFact})(Numberfact);
