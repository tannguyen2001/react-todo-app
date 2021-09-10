import React from 'react'
import  ReactDOM  from 'react-dom'
import TodoApp from './components/TodoApp'
import './App.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './components/store/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
      <Provider store={store} >
            <TodoApp/>
      </Provider>
        
      ,document.getElementById('root')
)