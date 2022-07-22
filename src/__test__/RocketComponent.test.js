import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../Redux/configureStore';
import Rocket from '../Components/Rocket/Rocket';
import '@testing-library/jest-dom';

test('rocket component test', () => {
  const props = {
    id: '1',
    name: 'Rocket test',
    description: 'test description',
    image: 'test image',
    reserved: false,
  };
  render(
    <Provider store={store}>
      <Rocket
        name={props.name}
        description={props.description}
        image={props.image}
        reserved={props.reserved}
        id={props.id}
      />
    </Provider>,
  );
  expect(screen.getByText('Rocket test')).toBeInTheDocument();
});
