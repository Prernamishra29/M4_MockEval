export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";


export const fetchProducts = () =>async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_LOADING });
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data =  await response.json();
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
};

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