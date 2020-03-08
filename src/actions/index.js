export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});
