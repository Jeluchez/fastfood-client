export {};
// import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
// import thunk, { ThunkAction } from 'redux-thunk';

// import { tracksReducer } from '../reducers/tracksReducer';


// // typescript no regonize this variables, therefore, we nedd to add to the interface Window
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//         __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
//     }
// }

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

// const rootReducer = combineReducers({
//     tracks: tracksReducer,
// });


// export const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(thunk)
//     )

// );
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >
// export type RootState = ReturnType<typeof rootReducer>
