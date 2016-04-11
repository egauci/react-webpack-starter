/* eslint no-unused-vars: 0 */
/* globals describe, it */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/app/App';
import {expect} from 'chai';
import {OrderedMap} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass} = TestUtils;

describe('App', () => {
  it('Renders two links', () => {
    const config = OrderedMap([
      ['viewportPath', '/view'],
      ['numberfactPath', '/number']
    ]);
    const component = renderIntoDocument(
      <App config={config}><div /></App>
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('Show Viewport Values');
    expect(items[1].textContent).to.contain('Show a Number Fact');
  });
  it('Identifies active element with correct className', () => {
    const config = OrderedMap([
      ['viewportPath', '/view'],
      ['numberfactPath', '/number']
    ]);
    const component = renderIntoDocument(
      <App config={config} viewportActive={false} numberfactActive={true}><div /></App>
    );
    const item = scryRenderedDOMComponentsWithClass(component, 'active');
    expect(item.length).to.equal(1);
    expect(item[0].textContent).to.contain('Show a Number Fact');
  });
});
