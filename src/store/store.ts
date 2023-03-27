import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import MoviesSlice from './slices/MoviesSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = {
	MoviesSlice,
}

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
	reducer,
	middleware,
})

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
