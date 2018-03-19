import React from 'react';
import ReactDOM from 'react-dom';
import { CardDetail } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});