import { applyMiddleware, createStore } from 'redux'

import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'

import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from '../enhancers/monitorReducer'

import rootReducer from '../configureStore/root.reducer'

export default function configureStore() {
    const middlewares = [thunkMiddleware, loggerMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhansers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, composedEnhansers)

    return store
}
