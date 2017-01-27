import Immutable from 'immutable';
import { MAKE_BARK, TOGGLE_BARK } from '../actions/dog-actions';

const initialState = Immutable.Map({
  hasBarked: false,
});

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_BARK:
      return state.set('hasBarked', action.payload);
    case TOGGLE_BARK:
      if (state.get('hasBarked')) {
        return state.set('hasBarked', false);
      }
      return state.set('hasBarked', true);
    default:
      return state;
  }
};

export default dogReducer;
