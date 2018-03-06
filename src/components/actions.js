import { DISPLAY_TEXT } from './reducers';

export function displayText(text) {
  return {
    type: DISPLAY_TEXT,
    payload: text
  };
}