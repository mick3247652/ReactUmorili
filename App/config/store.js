import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store =  createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store