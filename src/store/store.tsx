import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const store = () => {
  const sagaMiddleware = createSagaMiddleware();

  const finalReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
      return rootReducer(undefined, action);
    }
    return rootReducer(state, action);
  };

  return {
    ...createStore(finalReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default store;