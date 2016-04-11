/* eslint no-unused-vars: 0 */
/* globals describe, it */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Numberfact from '../../src/components/numberfact/Numberfact';
import {expect} from 'chai';
import {Map} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils;

const voidFunc = () => null;

describe('Numberfact', () => {
  it('Renders wait message while waiting', () => {
    const fact = Map({});
    const component = renderIntoDocument(
      <Numberfact fact={fact} clearFact={voidFunc} getFact={voidFunc} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'p');
    expect(items.length).to.equal(1);
    expect(items[0].textContent).to.contain('Waiting for fact');
  });
  it('Renders a fact', () => {
    const fact = Map({
      number: 8,
      text: 'Days in a week'
    });
    const component = renderIntoDocument(
      <Numberfact fact={fact} clearFact={voidFunc} getFact={voidFunc} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'p');
    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('8');
    expect(items[0].textContent).to.contain('Number');
    expect(items[1].textContent).to.contain('Fact');
    expect(items[1].textContent).to.contain('Days in a week');
  });
});
