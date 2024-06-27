import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Button from './components/atoms/Button'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <div className='min-h-min min-w-full flex flex-col justify-center items-center'>
        <Button title='Tasks' onPress={() => navigate('Tasks')} />
        <Button title='List' onPress={() => navigate('List')} />
      </div>
    </Provider>
  )
}

export default App
