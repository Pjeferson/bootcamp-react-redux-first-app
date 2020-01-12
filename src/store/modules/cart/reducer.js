import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => draft.filter(p => p.id !== action.id));
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { id, amount } = action;

        const productIndex = draft.findIndex(p => p.id === id);
        if (productIndex >= 0) {
          draft[productIndex].amount = amount;
        }
      });
    default:
      return state;
  }
}
