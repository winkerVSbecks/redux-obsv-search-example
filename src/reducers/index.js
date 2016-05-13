import {
  SEARCH_PENDING,
  SEARCH_FULFILLED,
  SEARCH_ABORTED,
  SEARCH,
} from '../actions';

const initialState = {
  isLoading: false,
  query: '',
  list: [],
};

function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, query: action.payload };

    case SEARCH_PENDING:
      return { ...state, isLoading: true };

    case SEARCH_FULFILLED:
      return { ...state, isLoading: false, list: action.payload };

    case SEARCH_ABORTED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default artistsReducer;
