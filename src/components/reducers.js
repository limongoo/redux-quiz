export const DISPLAY_TEXT = 'DISPLAY_TEXT';

export function text(state = [], { type, payload }) {
  switch (type) {
    case DISPLAY_TEXT:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}