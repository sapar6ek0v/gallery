import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import gallery from './reducers/galleryReducer'

const initialState = {}

const rootReducer = combineReducers({
  gallery,
})

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
