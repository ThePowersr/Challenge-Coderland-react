import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TasksScreen from '../../../src/components/pages/TasksScreen';
import { Provider } from 'react-redux';
import store from '../../../src/redux/store';


describe('TasksScreen component', () => {

  const renderTaskScreen = () => {
    return render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    )
  }

  it('renders TasksScreen component', () => {
    const { getByText, queryByTestId } = renderTaskScreen();

    // render correctly the modal
    expect(getByText('Add New Task')).toBeInTheDocument();
    expect(queryByTestId('modal')).toBeNull();
  });

  it('opens modal when Add New Task button is clicked', () => {
    const { getByText, getByTestId } = renderTaskScreen();

    // open modal
    fireEvent.click(getByText('Add New Task'));

    // Verify open modal
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  it('Add new Task', () => {
    const { getByText, getByTestId, getByPlaceholderText } = renderTaskScreen();

    expect(getByText('Add New Task')).toBeInTheDocument();
    fireEvent.click(getByText('Add New Task'));
    expect(getByTestId('modal')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('Task description'), { target: { value: 'new task' } });
    fireEvent.click(getByText('Add Task'));

    expect(getByText('new task')).toBeInTheDocument();
  });

  it('close modal', () => {
    const { getByText, getByTestId, queryByTestId } = renderTaskScreen();

    expect(getByText('Add New Task')).toBeInTheDocument();
    fireEvent.click(getByText('Add New Task'));
    expect(getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(getByTestId('close'));
    expect(queryByTestId('modal')).toBeNull();
  });

  it('does not allow adding a task if the input is empty', () => {
    const { getByText, getByTestId } = renderTaskScreen();

    fireEvent.click(getByText('Add New Task'));
    fireEvent.click(getByText('Add Task'));
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  it('close modal with button close', () => {
    const { getByText, queryByTestId } = renderTaskScreen();

    fireEvent.click(getByText('Add New Task'));
    fireEvent.click(getByText('Close'));
    expect(queryByTestId('modal')).toBeNull();
  });

});
