
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { loadState } from './localStorage';

const persistedState = loadState();

export const configureStore = () => createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
)