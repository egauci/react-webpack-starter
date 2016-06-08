/* eslint no-unused-vars: 0 */
/* globals describe, it */
import winsize from '../../src/reducers/winsize';
import {setWinsize, scroll} from '../../src/actions';
import {expect} from 'chai';
import {Map} from 'immutable';

describe('winsize', () => {
  it('reduces on SET_WINSIZE', () => {
    const state = Map({
      height: 0,
      width: 0,
      clientHeight: 0,
      clientWidth: 0,
      docHeight: 0,
      scrollY: 0,
      scrollX: 0
    });
    const tgtState = Map({
      height: 100,
      width: 200,
      docHeight: 300,
      clientHeight: 90,
      clientWidth: 180,
      scrollY: 52,
      scrollX: 62
    });
    const action = setWinsize({
      height: 100,
      width: 200,
      docHeight: 300,
      clientHeight: 90,
      clientWidth: 180,
      scrollY: 52,
      scrollX: 62
    });
    const newState = winsize(state, action);
    expect(newState).to.equal(tgtState);
  });
});
