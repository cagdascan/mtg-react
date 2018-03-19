import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import ListItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ListItem /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});