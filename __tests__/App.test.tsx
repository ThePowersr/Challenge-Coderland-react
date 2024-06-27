// __tests__/App.test.tsx

import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../src/redux/store';
import App from '../src/App';

describe('app test', () => {
  const renderApp = () => {
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
  };

  it('esto', () => {
    renderApp();

    // Verifica que los botones estén presentes
    const tasksButton = screen.getByText('Tasks');
    const listButton = screen.getByText('List');
    expect(tasksButton).toBeInTheDocument();
    expect(listButton).toBeInTheDocument();

    // Simula clic en el botón 'Tasks' y verifica la navegación
    fireEvent.click(tasksButton);

    // Simula clic en el botón 'List' y verifica la navegación
    fireEvent.click(listButton);
  })

});
