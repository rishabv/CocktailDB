import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import HomeReducer from "../routes/Home/modules/home"
import mainReducer from "../routes/MainWrapper/modules/MainWrapper"

const rootReducer =(history)=> combineReducers({
  router: connectRouter(history),
  home: HomeReducer,
  mainWrapper: mainReducer

});

export default rootReducer;