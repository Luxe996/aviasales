import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import './index.css'

import App from './components/App/App'
import { stopsFilterReducer } from './reducers/stopsFilterReducer'
import { fetchDataReducer } from './reducers/fetchDataReducer'
import { relevanceFilterReducer } from './reducers/relevanceFilterReducer'

const store = configureStore({
  reducer: {
    stopsFilter: stopsFilterReducer,
    fetchData: fetchDataReducer,
    relevanceFilter: relevanceFilterReducer,
  },
  middleware: [thunkMiddleware],
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
