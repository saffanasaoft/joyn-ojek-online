import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILED,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER_FAILED,
} from '../../constant/actionType';

const initialState = {
    loading: false,
    bookmarks: [],
    message: '',
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {

  case SIGNIN_USER:
    return { 
      ...state,
      loading : true
    };

  default:
    return state
  }
};

export default homeReducer
