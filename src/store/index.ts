// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk, {
//   ThunkAction,
//   ThunkDispatch,
//   ThunkMiddleware,
// } from "redux-thunk";

// import authReducer from "./auth/reducer";
// import chatReducer from "./chat/reducer";
// import conversationReducer from "./conversation/reducer";
// import { AuthActions } from "./auth/types";
// import { ChatActions } from "./chat/types";
// import { IConversationActions } from "./conversation/types";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   chat: chatReducer,
//   conversation: conversationReducer,
// });

// export type AppState = ReturnType<typeof rootReducer>;
// export type AppActions = AuthActions | ChatActions | IConversationActions;

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
//   )
// );

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   AppActions
// >;
// export type AppDispatch = ThunkDispatch<AppState, any, AppActions>;

// export default store;

export {};
