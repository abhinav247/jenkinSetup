import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatus.reducer'
import videos from './videosData.reducer'


const rootReducer = combineReducers({
  ajaxCallsInProgress,
  videos
});

export default rootReducer;