import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getFact} from '../../actions';
import lcss from './Numberfact.css';

class Numberfact extends Component {
  static propTypes = {
    fact: PropTypes.object,
    getFact: PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.getFact();
  }
  render() {
    if (!this.props.fact) {
      return <p>Waiting for fact</p>;
    }
    return (
      <div>
        <h2>Random Number Fact</h2>
        <p><span className={lcss.label}>Number:</span> {this.props.fact.get('number')}</p>
        <p><span className={lcss.label}>Fact:</span> {this.props.fact.get('text')}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fact: state.get('fact')
  };
}

export default connect(mapStateToProps, {getFact})(Numberfact);
