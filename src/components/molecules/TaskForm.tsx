import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface TaskFormProps {
  handleAddTask: (description: string) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleAddTask, setModal }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (event?: React.FormEvent) => {

    event!.preventDefault();
    if (description.trim() === '') {
      return;
    };
    setDescription('');
    handleAddTask(description);
    setModal(false);
    console.log(description);
  };

  return (
    <form
      data-testid='task-form'
      onSubmit={handleSubmit as React.FormEventHandler<HTMLFormElement>}
      className='flex-col flex h-full w-full justify-center items-center'
    >
      <Input
        label='Name Task'
        description={description}
        setDescription={setDescription}
      />
      <Button
        title='Add Task'
        onPress={handleSubmit}
      />
      <Button
        title='Close'
        onPress={() => setModal(false)}
      />
    </form >
  );
};

export default TaskForm;
