import TaskForm from '../molecules/TaskForm'
import CerrarBtn from '../../assets/cerrar.svg'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/slices/tasksSlice'

const Modal = ({ setModal }: { setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const dispatch = useDispatch();

  const handleAddTask = (description: string) => {
    dispatch(addTask({ id: new Date().toISOString(), description }));
  };

  return (
    <div data-testid='modal' className='modal'>
      <div data-testid='cerrar' className='cerrar-modal'>
        <img
          data-testid='close'
          src={CerrarBtn}
          alt="cerrar modal"
          onClick={() => setModal(false)}
        />
      </div>
      <TaskForm handleAddTask={handleAddTask} setModal={setModal} />
    </div>
  )
}

export default Modal