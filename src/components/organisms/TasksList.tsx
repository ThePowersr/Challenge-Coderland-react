import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <ul className='list-decimal min-w-96 w-3/5'>
      {tasks.map((task) => (
        <li key={task.id} className="p-2 border-b">
          {task.description}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
