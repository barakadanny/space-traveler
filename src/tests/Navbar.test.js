import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Navbar';
import Missions from '../components/Missions/Missions';
import Profile from '../components/profile/Profile';

import store from '../store/configStore';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = render(
      //   <Provider store={store}>
      <Router>
        <Header />
      </Router>,
      //   </Provider>
    );
    expect(header).toMatchSnapshot();
  });
});

describe('Missions', () => {
  it('renders without crashing', () => {
    const mission = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});

describe('Profile', () => {
  it('renders without crashing', () => {
    const profile = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
