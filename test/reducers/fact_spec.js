/* eslint no-unused-vars: 0 */
/* globals describe, it */
import fact from '../../src/reducers/fact';
import {clearFact} from '../../src/actions';
import {expect} from 'chai';
import {Map} from 'immutable';

describe('fact', () => {
  it('reduces on CLEAR_FACT', () => {
    const state = Map({
      number: 8,
      text: 'Days in a week'
    });
    const tgtState = Map({});
    const action = clearFact();
    const newState = fact(state, action);
    expect(newState).to.equal(tgtState);
  });
  it('reduces on GET_FACT', () => {
    const state = Map({});
    const tgtState = Map({
      number: 8,
      text: 'Days in a week'
    });
    const action = {type: 'GET_FACT', payload: {
      data: {number: 8, text: 'Days in a week'}
    }};
    const newState = fact(state, action);
    expect(newState).to.equal(tgtState);
  });
});
