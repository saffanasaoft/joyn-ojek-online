import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import setupInterceptors from '../middlewares/interceptors';
import rootSaga from './sagas/index';

setupInterceptors()

const sagaMiddleware = createSagaMiddleware()

function initializeStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);
    return store;
}

export default initializeStore()
