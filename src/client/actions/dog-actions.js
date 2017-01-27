import { createAction } from 'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';
export const makeBark = createAction(MAKE_BARK, () => true);

export const TOGGLE_BARK = 'TOGGLE_BARK';
export const toggleBark = createAction(TOGGLE_BARK);
