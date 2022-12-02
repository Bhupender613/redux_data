const initialstate = {
  product: [],
};
export const productreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SetProduct":
      return { ...state, product: action.product };
    default:
      return state;
  }
};
