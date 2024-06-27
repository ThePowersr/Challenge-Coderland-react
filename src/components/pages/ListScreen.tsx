import React from 'react'
import useData from '../../hooks/useData'
import userImage from '../../assets/userIcon.png';
import Spinner from '../atoms/Spinner';

const ListScreen: React.FC = () => {
  const { users, loading, error } = useData();

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }

  return (
    <div className='w-full h-full flex-col'>
      <div className='text-center py-7 text-5xl'>
        <h2>List of users</h2>
      </div>
      <div className='text-center w-full h-full flex justify-center'>
        <ul className='min-w-96 w-3/5 h-full pl-10'>
          {users?.map((user) => (
            <li key={user.id} className="p-2 flex border-b flex-row items-center">
              <img src={userImage} className='w-20'></img>
              <p className='pl-10'>{user.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default ListScreen
