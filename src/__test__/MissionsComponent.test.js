import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../Redux/configureStore';
import Mission from '../Components/Missions/Mission';
import '@testing-library/jest-dom';

const props = {
  id: '1',
  name: 'mission one',
  description: 'mission one description',
  member: false,
};

test('mission component test', () => {
  render(
    <Provider store={store}>
      <Mission
        id={props.id}
        name="mission one"
        description={props.description}
        member={props.member}
      />
    </Provider>,
  );
  expect(screen.getByText('mission one')).toBeInTheDocument();
});
