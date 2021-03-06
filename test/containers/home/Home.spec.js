import React                from 'react';
import {expect}             from 'chai';
import {shallow}            from 'enzyme';
import configureMockStore   from 'redux-mock-store';
import thunk                from 'redux-thunk';
import HomeConnected       from '../../../src/front/containers/home/Home';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  views: {
    currentView: 'home'
  }
};

let store;
let wrapper;
describe('HomeConnected (Home container) ', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<HomeConnected store={store} />).shallow().shallow();
  });

  it('should render container', () => {
    expect(wrapper.containsMatchingElement(<h1>Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap</h1>));
  });
});
