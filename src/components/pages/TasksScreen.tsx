import React, { useState } from 'react';
import TaskList from '../organisms/TasksList';
import Button from '../atoms/Button';
import Modal from '../templates/Modal';

const TasksScreen: React.FC = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className='flex-col flex w-screen h-screen items-center pt-10'>
      <Button title='Add New Task' onPress={() => setModal(true)} />
      <TaskList />
      {modal ? <Modal setModal={setModal} /> : null}
    </div>
  );
};

export default TasksScreen;
