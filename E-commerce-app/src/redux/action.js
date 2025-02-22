export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    };
};

export const placeOrder = () => {
    return {
        type: PLACE_ORDER
    };
};

export const updateQuantity = (id, quantity) => {
    return {
        type: UPDATE_QUANTITY,
        payload: { id, quantity }
    };
};