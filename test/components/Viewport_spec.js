/* eslint no-unused-vars: 0 */
/* globals describe, it */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Viewport from '../../src/components/viewport/Viewport';
import {expect} from 'chai';
import {OrderedMap} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils;

describe('Viewport', () => {
  it('Renders a P for each item', () => {
    const winsize = OrderedMap([
      ['height', 150],
      ['width', 500],
      ['scrollY', 333]
    ]);
    const component = renderIntoDocument(
      <Viewport winsize={winsize} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'p');
    expect(items.length).to.equal(3);
    expect(items[0].textContent).to.contain('height');
    expect(items[0].textContent).to.contain('150');
    expect(items[2].textContent).to.contain('scrollY');
    expect(items[2].textContent).to.contain('333');
  });
});
