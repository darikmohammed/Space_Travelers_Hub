import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../helper/test-util';
import MyProfile from '../routes/MyProfile';
import Rockets from '../routes/Rockets';
import Mission from '../routes/Missions';

describe('Testing Displayed', () => {
  it('It should have the Profile displayed', async () => {
    renderWithProviders(<MyProfile />);
    const title = await screen.findByRole('heading', { name: /My Rockets/i });
    expect(title).toBeInTheDocument();
  });
  it('It should have Rockets displayed', async () => {
    renderWithProviders(<Rockets />);
    setTimeout(() => {
      const buttons = screen.findAllByRole('button', {
        name: /Reserve Rocket/i,
      });
      expect(buttons.length).toBe(4);
    }, 2000);
  });
  it('It should have Missions displayed', () => {
    renderWithProviders(<Mission />);
    setTimeout(() => {
      const buttons = screen.findAllByRole('button', {
        name: /Join Mission/i,
      });
      expect(buttons.length).toBe(10);
    }, 2000);
  });
});

describe('Testing button Interaction', () => {
  const user = userEvent.setup();
  it('It should Reserve Rockets', () => {
    renderWithProviders(<Rockets />);
    setTimeout(() => {
      const buttons = screen.findAllByRole('button', {
        name: /Reserve Rocket/i,
      });
      user.click(buttons[0]);
      const reservedBadge = screen.queryByText('Reserved');
      expect(reservedBadge).toBeInTheDocument();
    }, 2000);
  });
  it('It should Join Mission', () => {
    renderWithProviders(<Mission />);
    setTimeout(() => {
      const buttons = screen.findAllByRole('button', {
        name: /Join Mission/i,
      });
      user.click(buttons[0]);
      const joinBadge = screen.queryByText('Active Member');
      expect(joinBadge).toBeInTheDocument();
    }, 2000);
  });
});
