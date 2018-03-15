export const GREETING = 'GREETING';
export const NAME = 'NAME';

export const stringReducer = (initial, ACTION) => (state = initial, { type, payload }) => {
  switch (type) {
    case ACTION:
      return payload;
    default:
      return state;
  }
};

export const greeting = stringReducer('', GREETING);
export const name = stringReducer('', NAME);