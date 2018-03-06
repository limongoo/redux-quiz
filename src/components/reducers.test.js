import { text, DISPLAY_TEXT } from './reducers';

it('Has a default of empty array', () => {
  const state = text(undefined, {});
  expect(state).toEqual([]);
});

const textToAdd = {
  greeting: 'Hello',
  name: 'Name'
};

it('Add Text', () => {
  const state = text([], { type: DISPLAY_TEXT, payload: textToAdd });
  expect(state).toEqual([textToAdd]);
});