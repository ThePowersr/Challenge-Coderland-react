import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TasksScreen from './components/pages/TasksScreen';
import ListScreen from './components/pages/ListScreen.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>

      </Route>
      <Route
        path='/Tasks'
        element={
          <Provider store={store}>
            <TasksScreen />
          </Provider>
        }
      />
    </Routes>
    <Routes>
      <Route
        path='/List'
        element={<ListScreen />}
      />
    </Routes>
  </BrowserRouter>
)
