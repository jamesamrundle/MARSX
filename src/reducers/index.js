import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import UploadContainer from "../containers/uploadStore"

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  //  upload: UploadContainer,
});

export default rootReducer;
