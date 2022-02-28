import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { createHashHistory } from "history"
import createRootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

export default store